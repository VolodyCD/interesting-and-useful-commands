// найшов бургер нажав
document.querySelector('.burger').addEventListener('click',function()
{
   // якщо ctive є удаляєм якщо не має додаємо
this.classList.toggle('active');
// находит элемент с классом .nav и переключает у него класс open.
document.querySelector('.nav').classList.toggle('open')
  }
)