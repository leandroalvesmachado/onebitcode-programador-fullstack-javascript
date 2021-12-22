## Exercício: Recriando um site com CSS #2

- Crie um Blog baseado no que será mostrado

![Screenshot](modelo.png)

![Screenshot](final.png)


### Fontes utilizadas:

1. Elemento H1 = Montserrat
2. Elementos com a classe date = Roboto
3. Elementos com a classe post-content = Open Sans


### Cores:

1. Background 
2. Cor da data = #008080


### HTML base:

```` 

<html>
  <head>
    <meta />
    <title>Blog</title>
    <link href="https://fonts.googleapis.com/css?family=Montserrat|Open+Sans|Roboto&display=swap" rel="stylesheet" />
    <link rel="stylesheet" type="text/css" href="style.css" />
  </head>
  <body>
    <div class="post-container">
      <div class="post">
        <p class="date">21 DE DEZEMBRO DE 2022</p><p>
        </p><h1>Primeira Publicação do Blog</h1>
        <div class="post-content">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat pariatur rem qui nam veniam numquam maiores tempore quas vero, rerum vel? Nemo repellat sapiente nulla eos impedit veniam, natus dolores!</p> 
        </div>
      </h1></div>
      <hr />
      <div class="post">
        <p class="date">22 DE DEZEMBRO DE 2022</p><p>
        </p><h1>Segunda Publicação do Blog</h1>
        <div class="post-content">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt repellat doloribus ad laboriosam eveniet modi soluta cumque beatae nobis, consequuntur possimus inventore vitae, deserunt cum fuga ab eius, est nam.</p>
        </div>
      </div>
      <hr />
      <div class="post">
        <p class="date">23 DE DEZEMBRO DE 2022</p><p>
        </p><h1>Terceira Publicação do Blog</h1>
        <div class="post-content">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt repellat doloribus ad laboriosam eveniet modi soluta cumque beatae nobis, consequuntur possimus inventore vitae, deserunt cum fuga ab eius, est nam.</p>
        </div>
      </div>        
    </div>        
  </body>
</html>

````