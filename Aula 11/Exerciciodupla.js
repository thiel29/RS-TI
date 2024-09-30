/* Nome: Ana Thiel Fortes */

import fs from "node:fs/promises";
import { select, input, confirm, checkbox } from "@inquirer/prompts";
import chalk from "chalk";

const file = "contacts.json";
let contacts;
let message = "Bem vindo ao seu Gerenciador de Contatos!";

const fetchContacts = async () => {
  try {
    const data = await fs.readFile(file, "utf-8");
    contacts = JSON.parse(data);
  } catch (error) {
    contacts = [];
  }
};

const saveContacts = async () => {
  await fs.writeFile(file, JSON.stringify(contacts, null, 2));
};

const isValidPhone = (phone, hasDDD) => {
  return hasDDD ? phone.length === 11 : phone.length === 9;
};

const addContact = async () => {
  let name, phone, hasDDD;

  while (true) {
    if (message) {
      console.log(message);
      message = ""; // limpa a mensagem após exibição
    }

    name = await input({
      message: "Digite o nome do contato: "
    });

    if (name.length === 0) {
      message = " Nome não pode ser vazio. Tente novamente.";
      continue;
    }

    break; // Sai do loop se todos os dados estiverem válidos
  }

  while (true) {
    if (message) {
      console.log(message);
      message = ""; // Limpa a mensagem após a exibição
    }

    hasDDD = await confirm({
      message: "Este número possui DDD?",
      inicial: true
    });

    phone = await input({
      message: "Digite o telefone do contato: "
    });

    if (phone.length === 0) {
      message = "Telefone não pode ser vazio. Tente novamente.";
      continue;
    }

    if (!isValidPhone(phone, hasDDD)) {
      message = hasDDD
        ? "O Telefone com DDD deve ter 11 dígitos (incluindo DDD). Tente novamente."
        : "O Telefone sem DDD deve ter 9 dígitos. Tente novamente.";
      continue;
    }
    break; // Sai do loop se todos os dados estiverem válidos
  }

  contacts.push({ name, phone });
  await saveContacts(); // Salva o novo contato no arquivo
  message = "Contato adicionado com sucesso!";
};

const listContacts = async () => {
  contacts.forEach((contact) => {
    console.log(`${contact.name}: ${contact.phone}`);
  });
};

const updateContacts = async () => {
  if (contacts.length === 0) {
    message = "Não existem contatos cadastrados!";
    return;
  }

  const uncheckedContacts = contacts.map((contact) => {
    return { value: contact.name, checked: false };
  });

  const contactsToUpdate = await checkbox({
    message: "Selecione o contato que deseja atualizar: ",
    choices: [...uncheckedContacts],
    instructions: false
  });

  if (contactsToUpdate.length === 0) {
    message = "Nenhum contato foi selecionado!";
    return;
  }

  for (const oldName of contactsToUpdate) {
    let newName = await input({
      message: `Digite o novo nome para o contato ${oldName}: `
    });

    if (newName.length === 0) {
      message = "O novo nome do contato não pode ser vazio!";
      return;
    }

    let hasDDD;
    let newPhone;

    while (true) {
      hasDDD = await confirm({
        message: "Este número possui DDD?",
        inicial: true
      });

      newPhone = await input({
        message: "Digite o novo telefone do contato: "
      });

      if (newPhone.length === 0) {
        message = "Telefone não pode ser vazio. Tente novamente!";
        continue;
      }

      if (!isValidPhone(newPhone, hasDDD)) {
        message = hasDDD
          ? "O Telefone com DDD deve ter 11 dígitos (incluindo DDD). Tente novamente."
          : "O Telefone sem DDD deve ter 9 dígitos. Tente novamente.";
        continue;
      }
      break; // Sai do loop se todos os dados estiverem válidos
    }

    const contactIndex = contacts.findIndex(
      (contact) => contact.name === oldName
    );

    if (contactIndex !== -1) {
      contacts[contactIndex].name = newName;
      contacts[contactIndex].phone = newPhone; // Atualiza o telefone
    }
  }

  await saveContacts(); // Salva as atualizações no arquivo
  message = "Contato(s) atualizado(s) com sucesso!";
};

const deleteContacts = async () => {
  if (contacts.length == 0) {
    message = " Não existem contatos cadastrados!";
    return;
  }

  const uncheckedContacts = contacts.map((contact) => {
    return { value: contact.name, checkd: false };
  });

  const contactsToDelete = await checkbox({
    message: "Selecione o contato que deseja deletar: ",
    choices: [...uncheckedContacts],
    instructions: false
  });

  if (contactsToDelete.length == 0) {
    message = "Nenhum contato foi selecionado!";
    return;
  }

  contacts = contacts.filter(
    (contact) => !contactsToDelete.includes(contact.name)
  );

  await saveContacts();

  message = "Contato(s) deletado(s) com sucesso!";
};

const showMessage = () => {
  if (message !== "") {
    console.log(chalk.bgMagenta.italic(message));
    console.log("");
  }
};

const start = async () => {
  await fetchContacts();

  while (true) {
    showMessage();

    const option = await select({
      message: "Menu > ",
      choices: [
        { name: "Adicionar contato: ", value: "add" },
        { name: "Listar todos os contatos: ", value: "list" },
        { name: "Atualizar seu contato: ", value: "update" },
        { name: "Deletar contato: ", value: "delete" },
        { name: "Sair", value: "exit" }
      ]
    });

    switch (option) {
      case "add":
        await addContact();
        break;
      case "list":
        await listContacts();
        break;
      case "update":
        await updateContacts();
        break;
      case "delete":
        await deleteContacts();
        break;
      case "exit":
        console.log(chalk.magenta.italic("Até a próxima!"));
        return;
    }
  }
};

start();
