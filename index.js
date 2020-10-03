function calculateMonthly() {
    const perHour = parseInt($("input[name=hours]").val());
    const perDay = $("input[name=days]").val();
    const perWeek = $("input[name=weeks]").val();
    const perMonth = $("input[name=months]").val();
    dump(perMonth);
    const currency = $("#currency").val();
    let monthlySalary = 0;
    const hoursPerDay = 8;
    const daysPerWeek = 5;
    const weeksPerMonth = 4;

    if (perHour) {
        monthlySalary = perHour * hoursPerDay * daysPerWeek * weeksPerMonth;
    }

    if (perDay) {
        monthlySalary = perDay * daysPerWeek * weeksPerMonth;
    }

    if (perWeek) {
        monthlySalary = perWeek * weeksPerMonth;
    }

    if (perMonth) {
        monthlySalary = perMonth;
    }

    if (currency === "usd") {
        monthlySalary = monthlySalary * 50;
    }

    appendToHistory(monthlySalary);
}

function appendToHistory(salary) {
    $(".history").append(`
        <tr>
            <td class="border px-4 py-2">${salary} php per month</td>
        </tr>
    `);
}

function dump(mixed) {
    console.log(mixed);
}
