<template>
  <section class="simple-projects__project">
    <div class="row">
      <div class="col-12 col-lg-4">
        <div class="calculator" ref="calculator">
          <h3>Calculator</h3>
          <div class="grid grid--calculator">
            <div class="calculator__display" ref="display">
              <p class="calculator__display__text" ref="displayText">
                0
              </p>
            </div>
            <button
              v-for="btn in calculatorButtons"
              :key="btn.id"
              :class="`calculator__button calculator__button--${btn.size}${btn.position.length ? '--' : ''}${btn.position}`"
              :value="btn.value"
            >
              <span class="calculator__text">{{ btn.text }}</span>
            </button>
          </div>
        </div>
      </div>
      <div class="col-12 offset-lg-2 col-lg-6">
        <div class="simple-projects__description">
          <div class="accordion" id="calculatorAccordion">
            <button class="accordion-trigger" data-triggers="calculatorPanelOne">
              <h4>Task</h4>
            </button>
            <p class="accordion-panel collapsed" id="calculatorPanelOne" data-collapsed="false">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
               Quaerat iusto minima esse id nemo qui adipisci atque est,
               excepturi rerum sed maxime iure sapiente molestias molestiae eveniet,
               tempora, ducimus hic officia ipsam eaque ipsa quo commodi aut?
               Velit, vitae adipisci.
            </p>
            <button class="accordion-trigger" data-triggers="calculatorPanelTwo">
              <h4>Solution</h4>
            </button>
            <p class="accordion-panel" id="calculatorPanelTwo" data-collapsed="true">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
               Quaerat iusto minima esse id nemo qui adipisci atque est,
               excepturi rerum sed maxime iure sapiente molestias molestiae eveniet,
               tempora, ducimus hic officia ipsam eaque ipsa quo commodi aut?
               Velit, vitae adipisci.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Accordion from '@/scripts/Accordion';

export default {
  data() {
    return {
      calculatorButtons: [
        {
          value: 'reset',
          text: 'C',
          size: 'sm',
          position: '',
          id: 0
        },
        {
          value: 'divide',
          text: '/',
          size: 'sm',
          position: '',
          id: 1
        },
        {
          value: 'times',
          text: '*',
          size: 'sm',
          position: '',
          id: 2
        },
        {
          value: 'minus',
          text: '-',
          size: 'sm',
          position: '',
          id: 3
        },
        {
          value: '7',
          text: '7',
          size: 'sm',
          position: '',
          id: 4
        },
        {
          value: '8',
          text: '8',
          size: 'sm',
          position: '',
          id: 5
        },
        {
          value: '9',
          text: '9',
          size: 'sm',
          position: '',
          id: 6
        },
        {
          value: 'plus',
          text: '+',
          size: 'lg',
          position: '',
          id: 7
        },
        {
          value: '4',
          text: '4',
          size: 'sm',
          position: '',
          id: 8
        },
        {
          value: '5',
          text: '5',
          size: 'sm',
          position: '',
          id: 9
        },
        {
          value: '6',
          text: '6',
          size: 'sm',
          position: '',
          id: 10
        },
        {
          value: '1',
          text: '1',
          size: 'sm',
          position: '',
          id: 11
        },
        {
          value: '2',
          text: '2',
          size: 'sm',
          position: '',
          id: 12
        },
        {
          value: '3',
          text: '3',
          size: 'sm',
          position: '',
          id: 13
        },
        {
          value: 'enter',
          text: '=',
          size: 'lg',
          position: '',
          id: 14
        },
        {
          value: '0',
          text: '0',
          size: 'lg',
          position: 'ver',
          id: 15
        },
        {
          value: 'comma',
          text: ',',
          size: 'sm',
          position: '',
          id: 16
        }
      ],
      calculationArray: [],
      currentNumber: '',
      displayString: ''
    }
  },
  mounted() {
    const accordion = new Accordion('#calculatorAccordion');
    accordion.mount();
    // I want to be able to press any button and to show it on display
    // When i click the operation, I want to see that also on display
    // When I click enter I want the calculation to be done
    // I want to calculate floating numbers only when they are entered, otherwise division is done with razlomci
    // OPTIONAL: i can chain multiple operations 
    // OPTIONAL: when I'm hovering the calculator, I want to be able to use keyboard to calculate operations
    this.$refs.calculator.addEventListener('mousedown', this.handleCalculatorClick);
    const buttons = document.querySelectorAll('.calculator__button');
    buttons.forEach(button => {
      button.addEventListener('mousedown', () => {
        button.classList.add('animating');

        setTimeout(() => {
          button.classList.remove('animating');
        }, 100)
      })
    })
  },
  methods: {
    handleCalculatorClick(event) {
      if(event.target.closest('.calculator__button')) {
        const btnValue = event.target.closest('.calculator__button').value;

        if(btnValue === 'reset') {
          this.resetCalculator();
          return;
        }

        if(isNaN(btnValue)) {
          this.calculationArray.push(this.currentNumber);
          this.calculationArray.push(btnValue);
          this.currentNumber = '';

          if(btnValue === 'enter') {
            this.sortCalculation();
            this.calculate(this.calculationArray, 0, this.calculationArray.length, 0);
            return;
          }
        } else {
          this.currentNumber += btnValue;
        }

        this.displayCalculation(btnValue);
      }
    },
    sortCalculation() {
      
    },
    calculate(array, i, arrayLength, solution) {
      if(arrayLength <= 2) {
        this.calculationArray = array;
        this.displayCalculation();
        return;
      }

      if(isNaN(array[i])) {
        switch (array[i]) {
          case 'plus':
            solution = !isNaN(array[ i+1 ]) ? parseInt(array[i - 1]) + parseInt(array[i + 1]) : solution;
            break;
          case 'minus':
            solution = !isNaN(array[ i+1 ]) ? parseInt(array[i - 1]) - parseInt(array[i + 1]) : solution;
            break;
          case 'times':
            solution = !isNaN(array[ i+1 ]) ? parseInt(array[i - 1]) * parseInt(array[i + 1]) : solution;
            break;
          case 'divide':
            solution = !isNaN(array[ i+1 ]) ? parseInt(array[i - 1]) / parseInt(array[i + 1]) : solution;
            break;
        }
        array.splice(0, 3, solution);
        i = 0;
        this.calculate(array, i, array.length, solution);
      } else {
        i+=1;
        this.calculate(array, i, array.length, solution);
      }

    },
    displayCalculation(value = false) {
      if(value) {
        if(this.displayString.length > 0 && isNaN(this.displayString[this.displayString.length - 1]) && isNaN(value)) {
          return;
        }
  
        switch (value) {
          case 'plus':
            this.displayString += ' <span class="calculator__display__sign">+</span> '
            break;
          case 'minus':
            this.displayString += ' <span class="calculator__display__sign">-</span> '
            break;
          case 'times':
            this.displayString += ' <span class="calculator__display__sign">*</span> '
            break;
          case 'divide':
            this.displayString += ' <span class="calculator__display__sign">/</span> '
            break;
          case 'comma':
            this.displayString += '<span class="calculator__display__sign">,</span>'
            break;
          default:
            this.displayString += value
            break;
        }

        this.$refs.displayText.innerHTML = this.displayString;
      } else {
        this.$refs.displayText.innerHTML = this.calculationArray[0];
        this.currentNumber = '';
      }
    },
    resetCalculator(solution = false) {
      this.$refs.displayText.innerHTML = '0';
      this.displayString = '';
      this.calculationArray = solution ? [solution] : [];
      this.currentNumber = '';
    },
    createSignSpan(sign) {
      const signSpan = document.createElement('span');
      signSpan.classList.add('calculator__display__sign');
      signSpan.textContent = sign;

      return signSpan;
    }
  }
}
</script>
