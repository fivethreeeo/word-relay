'use strict';

const gamerNumber = Number(prompt('쿵쿵따 참가자 수?')); // 참가자 수 받기
const $gamerNumber = document.querySelector('#number'); // 참가자 수 표시

const $input = document.querySelector('#inputWord'); // input
const $button = document.querySelector('#button'); // button

const $word = document.querySelector('#word'); // 제시어 표시
const $order = document.querySelector('#order'); // 순서 표시

let word; // '제시어'
let newWord; // '현재 단어'

const onInput = (event) => {
  //입력한 현재 단어 저장
  newWord = event.target.value;
};

const onClickButton = () => {
  // 입력한 현재 단어가 3글자 &&
  // (제시어가 비었거나 || 제시어의 끝과 현재 단어의 처음이 일치할 때)
  if (newWord.length === 3 && (!word || word[word.length - 1] === newWord[0])) {
    word = newWord;
    $word.textContent = word;

    // 차례 표시
    const order = Number($order.textContent);
    order + 1 > gamerNumber
      ? ($order.textContent = 1)
      : ($order.textContent = order + 1);
  } else {
    // 3글자가 아니거나, 제시어의 끝과 현재 단어의 처음이 일치하지 않을 때
    alert('입력한 단어가 올바르지 않아요');
  }

  // input 초기화 & 포커스
  $input.value = '';
  $input.focus();
};

if (gamerNumber > 0) {
  // 참가자 수 0명 초과일 때 게임 활성화
  $gamerNumber.textContent = gamerNumber + '명';
  $button.addEventListener('click', onClickButton);
  $input.addEventListener('input', onInput);
} else {
  // 참가자가 없을 때, input, button 비활성화
  $gamerNumber.textContent = '참가자가 없습니다.';
  $button.disabled = true;
  $input.disabled = true;
}
