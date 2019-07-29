(function () {
    'use strict';

    const reasonInput = document.getElementById('input-reason');
    const amountInput = document.getElementById('input-amount');
    const cancelBtn = document.getElementById('btn-cancel');
    const confirmBtn = document.getElementById('btn-confirm');
    const expensesList = document.getElementById('expenses-list');
    const totalExpensesOutput = document.getElementById('total-expenses');
    const alertCtrl = document.querySelector('ion-alert-controller');
    let totalExpenses = 0;

    confirmBtn.addEventListener('click', () => {
        const enteredReason = reasonInput.value;
        const enteredAmount = amountInput.value;

        if (enteredReason.trim().length <= 0 || enteredAmount <= 0 || enteredAmount.trim().length <= 0) {
            showAlert({
                message: 'Please enter valid reason and amount!',
                header: 'Invalid inputs',
                buttons: ['Okay']
            });

            return;
        }

        addItem({ enteredAmount, enteredReason });
        clearInputs();
    });

    cancelBtn.addEventListener('click', clearInputs);

    function clearInputs() {
        reasonInput.value = '';
        amountInput.value = '';
    }

    function addItem(item) {
        const { enteredReason, enteredAmount } = item;
        const newItem = document.createElement('ion-item');

        newItem.textContent = `${ enteredReason }: ${ enteredAmount }`;
        expensesList.appendChild(newItem);
        totalExpenses += +enteredAmount;
        totalExpensesOutput.textContent = totalExpenses;
    }

    async function showAlert(data) {
        const alertElement = await alertCtrl.create(data);
        alertElement.present();
    }
})();
