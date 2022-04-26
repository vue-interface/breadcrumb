<template>
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <breadcrumb-items>
                <slot />
            </breadcrumb-items>
        </ol>
    </nav>
</template>

<script>
import BreadcrumbItems from './BreadcrumbItems.vue';

export default {

    components: {
        BreadcrumbItems
    }

};
</script>
