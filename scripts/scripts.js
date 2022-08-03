window.addEventListener("load", () => {
  const inputTask = document.querySelector("#newTaskInput");
  const formTask = document.querySelector("#newTaskForm");
  const taskListElements = document.querySelector("#tasks");

  formTask.addEventListener("submit", (element) => {
    element.preventDefault();

    const task = inputTask.value;

    if (!task) {
      alert("Por favor, preencha o campo abaixo");
      return;
    }

    // div que engloba tudo de uma task (texto e botões), (elemento pai).
    const taskElement = document.createElement("div");
    taskElement.classList.add("task");

    // div content que engloba o input text, filha da div task acima
    const taskContentElement = document.createElement("div");
    taskContentElement.classList.add("content");

    // div que é pai dos botões de ação
    const actionElements = document.createElement("div");
    actionElements.classList.add("actions");

    // criando o botão de edição de tasks
    const editTaskButton = document.createElement("button");
    editTaskButton.classList.add("editButton");
    editTaskButton.innerHTML = "Editar";

    //criando o botão de deleção de tasks
    const deleteTaskButton = document.createElement("button");
    deleteTaskButton.classList.add("deleteButton");
    deleteTaskButton.innerHTML = "Deletar";

    deleteTaskButton.addEventListener('click', () => {
        taskListElements.removeChild(taskElement)
    })

    // colocando os botões dentro da div pai deles, a actions

    actionElements.appendChild(editTaskButton);
    actionElements.appendChild(deleteTaskButton);

    // input onde vai ser adicionada a nossa task
    const taskInputElement = document.createElement("input");
    taskInputElement.classList.add("text");
    taskInputElement.type = "text";
    taskInputElement.value = task;
    taskInputElement.setAttribute("readonly", "readonly");

    // colocando o input da task dentro da div content, de onde ela pertence
    taskContentElement.appendChild(taskInputElement);

    // colocando a div content dentro da task
    taskElement.appendChild(taskContentElement);

    // colocando a div actions dentro da task
    taskElement.appendChild(actionElements);

    // colocando a div task dentro de tasks que é a pai
    taskListElements.appendChild(taskElement);

    inputTask.value = "";

    editTaskButton.addEventListener("click", () => {

      if (editTaskButton.innerText.toLowerCase() == "editar") {
        taskInputElement.removeAttribute("readonly");
        taskInputElement.focus();
        editTaskButton.innerText = "Salvar";
      } else{
           taskInputElement.setAttribute('readonly', 'readonly')
           editTaskButton.innerText = 'Editar'
      }

    });

  });

});
