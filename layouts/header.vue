<template>
    <main class="min-h-screen bg-gray-100">
        <header class="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-6 shadow-lg">
            <div class="container mx-auto flex justify-between items-center">
                <h1 class="text-4xl font-extrabold">Quizz</h1>
                <nav class="space-x-4">
                    <NuxtLink to="/" class="text-white hover:text-yellow-300 transition duration-300">Accueil</NuxtLink>
                </nav>
            </div>
        </header>
        <div class="container mx-auto p-6">
            <slot />
        </div>
    </main>
</template>