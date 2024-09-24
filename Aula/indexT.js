/* Nomes: Ana Thiel Fortes, Davi de Oliveira Alves e Dieizon Cazuni*/
import fs from "node:fs/promises";
import { select, input, checkbox } from "@inquirer/prompts";
import chalk from "chalk";

const file = "goals.json";

let goals;

let message = "Bem vindo ao seu controle de metas!";

const fetchGoals = async () => {
  try {
    const data = await fs.readFile(file, "utf-8"); // leitura do arquivo
    goals = JSON.parse(data);
  } catch (error) {
    goals = [];
  }
};

const saveGoals = async () => {
  await fs.writeFile(file, JSON.stringify(goals, null, 2));
};

const registerGoal = async () => {
  const goal = await input({
    message: "Digite a sua meta: "
  });

  if (goal.length == 0) {
    message = "A meta não pode ser vazia!";
    return;
  }

  goals.push({ value: goal, checked: false });

  message = "Meta cadastrada com sucesso!";
};

const listGoals = async () => {
  if (goals.length == 0) {
    message = "Não existem metas cadastradas!";
    return;
  }

  // armazena as metas marcadas como concluídas
  const checkedGoals = await checkbox({
    message:
      "Use as setas para mudar de meta, o espaço para marcar/desmarcar a meta e o enter para finalizar.",
    choices: [...goals],
    instructions: false // remover as instruções em inglês
  });

  // garantir que as metas iniciem como desmarcadas
  goals.forEach((goal) => {
    goal.checked = false;
  });

  if (checkedGoals == 0) {
    message = "Nenhuma meta foi selecionada!";
    return;
  }

  // para cada meta selecionada, marca como concluída
  checkedGoals.forEach((checkedGoal) => {
    const goal = goals.find((selectedGoal) => {
      return selectedGoal.value == checkedGoal;
    });

    goal.checked = true;
  });

  message = `Meta(s) marcada(s) como concluída(s)! Você concluiu ${checkedGoals.length}/${goals.length} da(s) sua(s) meta(s)`;
};

/*message = `Meta(s) marcada(s) como concluída(s)! Você concluiu ${total.length}/${goals.length} da(s) sua(s) meta(s)`;*/

const listCompletedGoals = async () => {
  const completedGoals = goals.filter((goal) => {
    return goal.checked;
  });

  if (completedGoals.length == 0) {
    message = "Não existem metas concluídas.";
    return;
  }

  completedGoals.forEach((completedGoal) => {
    console.log(completedGoal.value);
  });
};

const listIncompletedGoals = async () => {
  const incompletedGoals = goals.filter((goal) => {
    return !goal.checked;
  });

  if (incompletedGoals.length == 0) {
    message = "Todas as metas foram concluídas!";
    return;
  }

  incompletedGoals.forEach((incompletedGoal) => {
    console.log(incompletedGoal.value);
  });
};

const deleteGoals = async () => {
  /* Informa o usuário caso não existam metas cadastradas */
  if (goals.length == 0) {
    message = "Não existem metas cadastradas!";
    return;
  }

  /* cada meta é transformada em um objeto */
  const uncheckedGoals = goals.map((goal) => {
    return { value: goal.value, checked: false };
  });

  /* exibir o checkbox permitindo que as metas sejam selecionadas */
  const goalsToDelete = await checkbox({
    message: "Selecione as metas que deseja deletar:",
    choices: [...uncheckedGoals],
    instructions: false
  });

  /* se nenhuma meta for selecioanda, informa ao usuário */
  if (goalsToDelete.length == 0) {
    message = "Nenhuma meta foi selecionada!";
    return;
  }

  /* filtra o array e cria um novo array com as metas não marcadas */
  goalsToDelete.forEach((item) => {
    goals = goals.filter((goal) => {
      console.log(`Diferente: ${goal.value != item}`);
      return goal.value != item;
    });
  });

  message = "Meta(s) deletada(s) com sucesso!";
};

const updateGoals = async () => {
  if (goals.length == 0) {
    message = "Não existem metas cadastradas!";
    return;
  }

  const uncheckedGoals = goals.map((goal) => {
    return { value: goal.value, checked: false };
  });

  const goalsToUpdate = await checkbox({
    message: "Selecione a(s) meta(s) que deseja atualizar: ",
    choices: [...uncheckedGoals],
    instructions: false
  });

  if (goalsToUpdate.length == 0) {
    message = "Nenhuma meta foi selecionada!";
    return;
  }

  for (const oldGoal of goalsToUpdate) {
    // solicitar o novo nome para a meta selecionada
    const newGoal = await input({
      message: `Digite o novo nome para a meta ${oldGoal}: `
    });

    if (newGoal.length == 0) {
      message = "O novo nome da meta não pode ser vazio!";
      return;
    }

    const goalIndex = goals.findIndex((goal) => goal.value === oldGoal);

    if (goalIndex !== -1) {
      goals[goalIndex].value = newGoal;
    }
  }

  message = "Meta(s) atualizada(s) com sucesso!";
};

const showPercentage = async () => {
  const checkedGoals = await checkbox({
    choices: [...goals],
    instructions: false // remover as instruções em inglês
  });
  const total = parseFloat(goals.length);
  const total1 = parseFloat(checkedGoals.length);
  const total2 = (parseFloat(total1) / parseFloat(total)) * 100;
  if (total2 <= 25) {
    message = `Você concluiu ${parseFloat(
      total2
    )}% da(s) sua(s) meta(s), você pode melhorar!`;
  } else if (total2 <= 50) {
    message = `Você concluiu ${parseFloat(
      total2
    )}% da(s) sua(s) meta(s) e metade já foi!`;
  } else if (total2 <= 75) {
    message = `Você concluiu ${parseFloat(
      total2
    )}% da(s) sua(s) meta(s), quase lá!`;
  } else {
    message = `Você concluiu ${parseFloat(total2)}%! Arrassou!`;
  }
};
// message = `Você concluiu ${parseFloat(total2)}% da(s) sua(s) meta(s)`//

const showMessage = () => {
  if (message != "") {
    console.log(chalk.bgGreen.italic(message));
    console.log("");
    message = "";
  }
};

const start = async () => {
  await fetchGoals();

  while (true) {
    showMessage();
    await saveGoals();

    const option = await select({
      message: chalk.bgMagenta.italic.bold("Menu > "),
      choices: [
        {
          name: chalk.magenta.italic("Cadastrar meta"),
          value: "register"
        },
        {
          name: chalk.magenta.italic("Porcentagem da(s) meta(s)"),
          value: "percentage"
        },
        {
          name: chalk.magenta.italic("Listar meta(s)"),
          value: "list"
        },
        {
          name: chalk.magenta.italic("Listar meta(s) realizada(s)"),
          value: "completed"
        },
        {
          name: chalk.magenta.italic("Listar meta(s) não realizada(s)"),
          value: "incompleted"
        },
        {
          name: chalk.magenta.italic("Atualizar meta(s)"),
          value: "update"
        },
        {
          name: chalk.magenta.italic("Deletar meta(s)"),
          value: "delete"
        },
        {
          name: chalk.magenta.italic("Sair"),
          value: "out"
        }
      ]
    });

    switch (option) {
      case "register":
        await registerGoal();
        console.log(goals);
        break;
      case "percentage":
        await showPercentage();
        break;
      case "list":
        await listGoals();
        break;
      case "completed":
        await listCompletedGoals();
        break;
      case "incompleted":
        await listIncompletedGoals();
        break;
      case "update":
        await updateGoals();
        break;
      case "delete":
        await deleteGoals();
        break;
      case "out":
        console.log(chalk.bgMagenta.italic("Até a próxima!"));
        return;
    }
  }
};

start();
