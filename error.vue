<template>
<div v-if="error.statusCode === 404">
   404 page not found.
</div>
<div v-else>
   error code, not 404.
</div>
</template>