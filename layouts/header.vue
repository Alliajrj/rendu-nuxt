<template>
    <main class="min-h-screen bg-gray-100">
        <header class="bg-blue-500 text-white p-4 shadow-md">
            <h1 class="text-3xl font-bold">Le quizz des foufous</h1>
            <nav class="mt-2">
                <NuxtLink to="/" class="text-white hover:underline">Accueil</NuxtLink>
            </nav>
        </header>
        <div class="p-6">
            <slot />
        </div>
    </main>
</template>