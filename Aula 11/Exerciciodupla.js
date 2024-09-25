/* Nomes: Ana Thiel Fortes, Dieizon Cazuni*/

import fs from "node:fs/promises";
import { select, input, confirm } from "@inquirer/prompts";
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
      message = ""; // limpa a mensagem a pós exibição
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
      message = ""; //Limpa a mensagem após a exibição
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
  message = "Contato adicionado com sucesso!";
};

const listContacts = async () => {
  contacts.forEach((name) => {
    console.log(name);
  });
};

const showMessage = () => {
  if (message !== "") {
    console.log(chalk.bgGreen.italic(message));
    console.log("");
    message = "";
  }
};

const start = async () => {
  await fetchContacts();

  while (true) {
    showMessage();
    await saveContacts();

    const option = await select({
      message: "Menu > ",
      choices: [
        { name: "Adicionar contato: ", value: "add" },
        { name: "Listar todos os contatos: ", value: "list" },
        { name: "Atualize o seu contato: ", value: "update" },
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
      case "exit":
        console.log("Até a próxima!");
        return;
    }
  }
};

start();
