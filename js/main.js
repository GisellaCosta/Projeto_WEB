let logins = [
  {
    email: "gisella@email.com",
    senha: "admin",
  },
];

window.onload = () => {
  Formulario.salvarFormulario();
  FormularioCadastro.salvarCadastro();
};

class Formulario {
  constructor() {
    this.inputEmail = document.querySelector("#staticEmail");
    this.inputSenha = document.querySelector("#inputPassword");
  }

  static salvarFormulario() {
    document
      .querySelector(".formulario-form")
      .addEventListener("submit", (e) => {
        e.preventDefault();
        const formulario = new Formulario();

        const email = logins.fill((login) => login.email == formulario.inputEmail.value)
        const senha = logins.fill((login) => login.senha == formulario.inputSenha.value)

          if (!email.length) {
            return alert("Email inválido!");
          }
          if (!senha.length) {
            return alert("Senha inválida!");
          } else {
            $("#liveToast").show();
          }
      });
  }
}

class FormularioCadastro {
  constructor() {
    this.inputEmail = document.querySelector("#email-cadastro");
    this.inputSenha = document.querySelector("#senha-cadastro");
  }

  static salvarCadastro() {
    document.querySelector(".form-cadastro").addEventListener("submit", (e) => {
      e.preventDefault();
      const formulario = new FormularioCadastro();
      console.log(formulario);
      if (formulario.inputEmail.value == null) {
        alert("Email inválido!");
      }
      if (formulario.inputSenha.value == null) {
        alert("Senha inválido!");
      } else {
        let login = {
          email: formulario.inputEmail.value,
          senha: formulario.inputSenha.value,
        };
        logins.push(login);
        $(".modal").modal("hide");
        alert("Cadastrado com sucesso!");
        console.log(logins);
      }
    });
  }
}
