<template>
<section id="on-boarding">
    <div class="text-center" v-if="step === 1">
        <h1 class="text-2xl">Thanks for use Bossy Bot</h1>
        <h2 class="text-xl">Lets do amazing & productive work!</h2>
        <button type="button" v-on:click="nextStep()"
            class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-10 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Lets
            start</button>
    </div>

    <div class="text-center" v-if="step === 2">
        <h1 class="text-2xl mb-4">100% protected privacy</h1>
        <p class="text-x">Bossy Bot is open source app ( MIT License )</p>
        <p class="text-x">It will never share your data to anybody</p>
        <p class="text-x">All data will be stored in your computer</p>
        <button type="button" v-on:click="nextStep()"
            class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-10 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Gotcha</button>
    </div>

    <div class="text-center" v-if="step === 3">
        <h1 class="text-2xl">Lets do productive work in distracted world</h1>
        <ul>
            <li>
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </li>
            <li>
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </li>
            <li>
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </li>
            <li>
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </li>
            <li>
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </li>
        </ul>
        <button type="button" v-on:click="nextStep()"
            class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-10 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Roger
            that!</button>
    </div>

    <div class="ob-step" v-if="step === 4">
        <div class="max-w-screen-sm mx-auto my-0">
            <h1 class="text-2xl text-center mb-4">Tell me about yourself</h1>
            <form>
                <div class="mb-6">
                    <label for="yourName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your name</label>
                    <input type="yourName" id="yourName"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="John smith" required>
                </div>
                <div class="mb-6">
                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your working schedule</label>
                    <div class="flex flex-row">
                        <div class="p-2 text-center" v-for="day in workingDays">
                            <input v-bind:id="'chk-' + day.id" v-model="day.checked" aria-describedby="remember" type="checkbox"
                                class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required>
                            <label v-bind:for="'chk-' + day.id" class="font-medium text-gray-900 dark:text-gray-300">{{ day.label }}</label>
                        </div>
                    </div>
                </div>
                <div class="text-right">
                    <button type="button" v-on:click="nextStep()"
                        class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-10 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Done</button>
                </div>
            </form>
        </div>
    </div>
</section>
</template>

<script>
export default {
    data: function() {
        
        const workingTime = [];
        
        for (let i = 0; i <= 23; i += 1) {
            workingTime.push({
                id: i,
                label: i + ':00',
            });
            workingTime.push({
                id: i,
                label: i + ':30',
            });
        }
        
        return {
            step: 1,
            workingDays: [{
                id: 1,
                checked: false,
                label: 'Sunday',
            }, {
                id: 2,
                checked: true,
                label: 'Monday',
            }, {
                id: 3,
                checked: true,
                label: 'Tuesday',
            }, {
                id: 4,
                checked: true,
                label: 'Wednesday',
            }, {
                id: 5,
                checked: true,
                label: 'Thursday',
            }, {
                id: 6,
                checked: true,
                label: 'Friday',
            }, {
                id: 7,
                checked: false,
                label: 'Saturday',
            }],
            workingTime: workingTime,
            nextStep: function() {
                this.step += 1;
            },
        }
    },
};
</script>


<style>
#on-boarding {}
</style>
