<script setup>

</script>

<template>
    <!-- <div class="container mx-auto p-4">
        <div class="relative w-full h-screen">
            <div class="absolute top-1/2 left-1/2">
                Test
            </div>

        </div>
    </div> -->

    <div class="flex">
        <div class="flex-1">
            Item 1
        </div>
        <div class="flex-1">
            Item 2
        </div>
    </div>

    <hr>

    <div class="grid grid-cols-2">
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div>
        <div>Item 5</div>
        <div>Item 6</div>
    </div>

    <hr>

    <div class="box">
        <div class="bg-blue-500 p-4 m-4">
            BOX
        </div>
    </div>

    <hr>

    <div class="divImg">
        <img class="hover:sepia transition-filter duration-750 w-50 h-50"
            src="https://fastly.picsum.photos/id/1065/200/300.jpg?hmac=WvioY_uR2xNPKNxQoR9y1HhWkuV6_v7rB23clZYh0Ks"
            alt="" srcset=""></img>
    </div>

    <hr>

    <div class="divText m-4 p-3 bg-emerald-500 border-3 border-orange-700 rounded-2xl">
        <div class="text-3xl font-extrabold text-amber-600">Hello World</div>
        <div class="text-3xl font-extrabold text-amber-600/50">Hello World</div>
    </div>

    <hr>

    <button class="btn">Button</button>
    <button class="btn btn-neutral">Neutral</button>
    <button class="btn btn-primary">Primary</button>
    <button class="btn btn-secondary">Secondary</button>
    <button class="btn btn-accent">Accent</button>
    <button class="btn btn-info">Info</button>
    <button class="btn btn-success">Success</button>
    <button class="btn btn-warning">Warning</button>
    <button class="btn btn-error">Error</button>


</template>

<style scoped></style>