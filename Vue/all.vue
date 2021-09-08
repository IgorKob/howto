
data, computed, watch, methods


щоб приховати елемент тільки на даній сторінці
:class="{'d-none': route().current('dashboard')}"




window.addEventListener('touchmove', this.onScroll)
if (document.documentElement.scrollTop >= 5 || document.documentElement.scrollTop <= -2) {





<!-- 1. -->
data у компонентов должно быть функцией, чтобы каждый экземпляр компонента управлял
собственной независимой копией возвращаемого объекта данных:

data: function () {
  return {
    count: 0
  }
}




// оголосити реквізит з декількома типами
props: {
  value: {
    type: String | Number | Boolean | Object, or [Number, String, Object]
    default: ''
  }
}
