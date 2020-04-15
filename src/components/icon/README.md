# Icon
Компонент иконок

### Подключение
```
<template>
	...
	<icon v-bind="icon" />
	...
</template>

<script>
    export default {
        data() {
            return {
                icon: {
                    name: 'assessment',
                    width: '64px',
                    height: '64px',
                    fill: '#2196f3',
                    stroke: '#673ab7'
                }
            }
        },
    }
</script>
```

### Входные параметры

| Параметр			| Тип 				| Описание              |
|:------------------|:------------------|:----------------------|
| name				| String			| Имя иконки			|
| height			| String			| Высота иконки			|
| width				| String			| Ширина иконки			|
| fill				| String			| Цвет иконки			|
| stroke			| String			| Цвет обводки иконки	|