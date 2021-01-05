/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';


/*
 2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

 3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)
 
 4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
 "Добавляем любимый фильм"
 
 5) Фильмы должны быть отсортированы по алфавиту*/

 document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    const adds=document.querySelectorAll(".promo__adv img");
    const genre=document.querySelector(".promo__genre");
    const bgPoster=document.querySelector(".promo__bg");
    const moviesList=document.querySelector(".promo__interactive-list");
    const addForm=document.querySelector('form.add');
    const addInput=addForm.querySelector('.adding__input');
    const checkbox=addForm.querySelector('[type="checkbox"]');

    
    
    // 1st TASK
    
    const deleteAdds=(array) =>{
        array.forEach (item => {
            item.remove();
        });
    };
    deleteAdds(adds);
    
    
    // const adds=document.querySelectorAll(".promo__adv img");
    // adds.forEach ( function (item) {
    //     item.remove();
    // });
    
    
    // 2nd TASK
    
    const makeChanges=() => {
        genre.textContent="ДРАМА";
    
    // 3rd TASK Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
    // Реализовать только при помощи JS

         bgPoster.style.backgroundImage='url("img/bg.jpg")';

    };

    makeChanges();
    
    
    // 4 and 5th th TASKS
    
    const sortArr=(arr) =>{
        arr.sort();
    };
   

    
    
    const createMovieList=(films, parent) =>{
        moviesList.innerHTML=""; // this action deletes the content with the help of the empty "" marks
        sortArr(films);
        films.forEach((film, i) =>{
            parent.innerHTML+=`
            <li class="promo__interactive-item"> ${i+1}. ${film}
                                        <div class="delete"></div>
                                    </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) =>{
            btn.addEventListener('click', ()=>{
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                createMovieList(movieDB.movies, moviesList);
            });
        });
        

    };

    createMovieList(movieDB.movies, moviesList);


    addForm.addEventListener('submit', (event) =>{
        event.preventDefault();

        let newFilm=addInput.value;
        const favorite=checkbox.checked;

        if (newFilm) {

            if(newFilm.length>21){
                newFilm=`${newFilm.substring(0, 22)}...`;
            }

            if(favorite){
                console.log("Добавляем любимый фильм");
            }
         movieDB.movies.push(newFilm);

         sortArr(movieDB.movies);

         createMovieList(movieDB.movies, moviesList);
        }

        
        event.target.reset();
        
        });
    
 });

/*1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий. */









