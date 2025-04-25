const tiendaDeRopa = {
    nombre: "Moda y Calzado",
    descripcion: "Tienda virtual de ropa moderna con diseños actuales y estilos variados.",
    productos: [
      {
        nombre: "Camiseta Moderna",
        precio: 49.99,
        precioOriginal: 62.49,
        descuento: "20%",
        etiqueta: "descuento",
        descripcion: "Camiseta de algodón 100% con diseño minimalista y moderno. Perfecta para el día a día.",
        imagen: "./img/camisa.png",
        enlaceDetalle: "detalle de camiseta.html"
      },
      {
        nombre: "Pantalón Casual",
        precio: 79.99,
        descripcion: "Pantalón cómodo y versátil, ideal para un look casual y desenfadado.",
        imagen: "./img/pantalon.png"
      },
      {
        nombre: "Vestido Elegante",
        precio: 119.99,
        descripcion: "Vestido elegante para ocasiones especiales. Diseño sofisticado y moderno.",
        imagen: "./img/vestido.png"
      },
      {
        nombre: "Chaqueta Moderna",
        precio: 149.99,
        descripcion: "Chaqueta urbana y moderna, perfecta para climas fríos sin sacrificar estilo.",
        imagen: "./img/chaqueta.png"
      },
      {
        nombre: "Zapatos Deportivos",
        precio: 229.99,
        etiqueta: "nuevo",
        descripcion: "Zapatos deportivos con diseño innovador para máxima comodidad en movimiento.",
        imagen: "./img/zapatos.png"
      },
      {
        nombre: "Bolso de Mano",
        precio: 49.99,
        descripcion: "Bolso elegante para completar cualquier outfit diario con estilo.",
        imagen: "./img/bolso.png"
      }
    ],
    detalleProducto: {
      nombre: "Camiseta Moderna",
      precio: 49.99,
      precioOriginal: 62.49,
      descuento: "20%",
      stock: true,
      calificacion: 4,
      opiniones: 234,
      descripcion: "Camiseta moderna confeccionada en 100% algodón, ideal para un estilo casual y moderno.",
      caracteristicas: {
        material: "100% algodón",
        tallas: ["S", "M", "L", "XL", "XXL"],
        colores: ["Azul", "Blanco", "Negro"],
        estampado: "Diseño exclusivo de la colección urbana",
        lavado: "Lavar a máquina a 30°C"
      },
      imagenes: ["./img/camisa.png", "./img/blanco.png", "./img/negro.png"]
    }
  };  
  console.log(tiendaDeRopa);