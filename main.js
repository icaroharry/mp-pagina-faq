const faqs = [
  {
    question: "Como faço para redefinir minha senha?",
    answer:
      'Você pode redefinir sua senha clicando em "Esqueceu sua senha" na página de login.',
  },
  {
    question: "Quais são os métodos de pagamento aceitos?",
    answer: "Aceitamos Visa, Mastercard, American Express e Paypal.",
  },
  {
    question: "Qual é a política de reembolso?",
    answer: "Oferecemos reembolso total até 30 dias após a compra.",
  },
  {
    question: "Como entro em contato com o suporte?",
    answer: "Você pode nos contatar pelo e-mail, telefone ou chat ao vivo.",
  },
];

function toggleAnswer(event) {
  const questionCard = event.currentTarget;

  const answer = questionCard.querySelector(".faq-container__answer");
  const icon = questionCard.querySelector(".faq-container__icon");

  if (answer.classList.contains("open")) {
    answer.classList.remove("open");
    icon.classList.remove("open");
  } else {
    answer.classList.add("open");
    icon.classList.add("open");
  }
}

window.onload = function () {
  const faqContainerList = document.querySelector(".faq-container__list");

  const questionCardTemplate = document.querySelector("#question-card");

  faqs.forEach((faq) => {
    const newFaqItem = document.importNode(questionCardTemplate.content, true);

    newFaqItem.querySelector(".faq-container__question-text").textContent =
      faq.question;
    newFaqItem.querySelector(".faq-container__answer").textContent = faq.answer;

    newFaqItem
      .querySelector(".faq-container__question-card")
      .addEventListener("click", toggleAnswer);

    faqContainerList.appendChild(newFaqItem);
  });
};
