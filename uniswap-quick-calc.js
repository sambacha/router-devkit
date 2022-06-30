// ==UserScript==
// @name         Add Quick Calculations to Uniswap
// @namespace    http://tampermonkey.net/
// @version      0.5.4
// @description  Add quick links on uniswap, similar to trading interfaces
// @author       Korkey128k
// @include      https://app.uniswap.org/
// @include      https://uniswap.hedron.pro/*
// @icon         https://www.google.com/s2/favicons?domain=uniswap.org
// @grant        none
// @downloadURL  https://gist.githubusercontent.com/Korkey128k/3806feb286f89659b88c8d53ff39b2c5/raw
// @updateURL    https://gist.githubusercontent.com/Korkey128k/3806feb286f89659b88c8d53ff39b2c5/raw
// ==/UserScript==

(function() {
    'use strict';

    writeStylez()

    var inputEvent = new Event('input', { bubbles: true, simulated: true });
    var nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;

    document.addEventListener("animationend", function(event) {
        if (event.animationName == "nodeInserted") {
            if(document.querySelector('#swap-currency-input .open-currency-select-button') !== null) {
                maybeAddButtons()
            }
        }
    }, false);

    function writeStylez() {
        const stylez = document.createElement('style')

        stylez.innerHTML = `
          @keyframes nodeInserted {
            from { opacity: 0.99; }
            to { opacity: 1; }
          }

          #web3-status-connected {
            animation-duration: 0.5s;
            animation-name: nodeInserted;
          }

          #swap-currency-input > div:first-child {
            border-radius: 20px 20px 0 0;
            border-bottom: 0;
          }

          #swap-currency-input > div:first-child:hover + #quick-calc-container {
            border-color: rgb(64, 68, 79);
          }

          #quick-calc-container {
            display: flex;
            flex-flow: row nowrap;
            justify-content: center;
            align-items: stretch;
            width: 100%;
            border-radius: 0 0 20px 20px;
            border: 1px solid rgb(25, 27, 31);
            border-top: 0;

            background: rgb(33, 36, 41);
            padding: 0.6em 0.8em 1em;
            font-size: 0.9em;
          }

          #quick-calc-container span {
            flex: 1 1 auto;
            padding: 0.5em 0;
            color: rgb(143, 150, 172);
            text-align: center;
            text-decoration: none;
            cursor: pointer;
          }
        `

        document.head.appendChild(stylez);

    }

    function maybeAddButtons() {
        if(document.querySelector('#quick-calc-container') === null) {
            const buttonContainer = document.createElement('div')
            buttonContainer.id = 'quick-calc-container'

            for(const percent of [5, 10, 15, 20, 25, 30, 40, 50, 60, 75, 95]) {
                let button = document.createElement('span')
                button.setAttribute('data-percent', percent)
                button.innerText = `${percent}%`

                buttonContainer.appendChild(button)
            }

            document.querySelector('#swap-currency-input').appendChild(buttonContainer)
            document.querySelectorAll('#quick-calc-container span').forEach((button) => button.addEventListener('click', modifyInput) )
        }
    }

    function modifyInput(event) {
        event.preventDefault();
        event.stopPropagation();

        let thisPercent = parseFloat(event.target.getAttribute('data-percent'))

        fillIn(calculatePercent(thisPercent))
    }

    function calculatePercent(percent) {

        // Lolz at the selector. Fra gil ey, must be french...
        let balanceElem = document.querySelector('#swap-currency-input > div > div > div > div:last-of-type')

        if(balanceElem.textContent.match(/\d+(,\d+)*(\.\d+)*/g) !== null) {
          let balance = balanceElem.textContent.match(/\d+(,\d+)*(\.\d+)*/g).map((match) => { return parseFloat(match.replace(',', '')) } )[0]
          return (percent / 100.0) * balance
        }

    }

    function fillIn(amt) {
        let tokenInput = document.querySelector('#swap-currency-input input.token-amount-input')
        nativeInputValueSetter.call(tokenInput, amt)
        tokenInput.setAttribute('value', amt)
        tokenInput.dispatchEvent(inputEvent)
    }
})();