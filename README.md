# @vasiliyrusin/v-with



## Install

`npm i @vasiliyrusin/v-with`

## Import

### Global import

```js
import Vue from "vue";
import VWith from "@vasiliyrusin/v-with";

Vue.use(VWith);
```

### Local import

```js
import { VWith } from "@vasiliyrusin/v-with";

export default {
  name: "ComponentName",
  components: { VWith }
}
```

## Example

```vue
<template>
    <VWith :variables="{ world: 'world' }">
        <template #default="{ world }">
            Hello, {{ world }}!
        </template>
    </VWith>
</template>

<script>
    import { VWith } from "@vasiliyrusin/v-with";
    
    export default {
        name: "ExampleComponent",
        components: { VWith }
    }
</script>
```
