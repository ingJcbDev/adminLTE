# AdminLTE con Angular
[Videos](https://www.youtube.com/channel/UCAHdAWy0RTVI_9H7iWU68cA/videos)
### Crear un nuevo proyecto en Angular
```bash
ng new adminlte
```
### Iniciar el servidor Angular
```bash
ng serve
```
### Crear Componente sin archivos de pruebas
```bash
ng g c shared/header --skip-tests
ng g c shared/sidebar --skip-tests
ng g c shared/footer --skip-tests
```

### Crear Modulo Solo un archivo
```bash
ng g m shared/shared --flat
```

### Crear Componente sin archivos de pruebas
```bash
ng g c pages/dashboard --skip-tests
ng g c pages/usuarios --skip-tests
ng g c pages/productos --skip-tests
```