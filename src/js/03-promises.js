import Notiflix from 'notiflix';

const form = document.querySelector('.form');

form.addEventListener('submit', onFormeSubmit);

function onFormeSubmit(event) {
  event.preventDefault();

  let delay = +form.elements.delay.value;
  const { step, amount } = form.elements;

  for (let i = 1; i <= amount.value; i += 1) {
    createPromise(i, delay)
      .then(value => {
        Notiflix.Notify.success(
          `Fulfilled promise ${value.position} in ${value.delay}ms`
        );
      })
      .catch(value => {
        Notiflix.Notify.failure(
          `Rejected promise ${value.position} in ${value.delay}ms`
        );
      });

    delay += +step.value;
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
