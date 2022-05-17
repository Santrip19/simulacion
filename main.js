function calcular()       
{   let lanzamiento; 
    f=[0,0,0,0,0,0,0]
    n=parseInt(document.datos.n.value)

// numeros al azar del 1 al 6
for(i=0 ; i<n; i++)
{  lanzamiento=Math.round(6*Math.random(1)+0.5)  ;  
    f[lanzamiento]=f[lanzamiento]+1 }
// hallar frecuencia
for(i=1 ; i<f.length; i++)
{  barra="";b=Math.round(100*f[i]/n);
// asignar numeros a cada input
for(j=0 ; j<b; j++)  {  barra=barra+"*" }
    document.datos[3*i-1].value=f[i]  ; 
    document.datos[3*i].value=f[i]/n  ;     
    }

    let uno = document.getElementById('uno').value
    let dos = document.getElementById('dos').value
    let tres = document.getElementById('tres').value
    let cuatro = document.getElementById('cuatro').value
    let cinco = document.getElementById('cinco').value
    let seis = document.getElementById('seis').value

        let canvas=document.getElementById('grafica').getContext('2d')
        var chart = new Chart(canvas, {
            type:"bar",
            data : {
                labels:["Uno", "Dos", "Tres", "Cuatro", "Cinco", "Seis"],
                datasets:[{
                    label: "Lanzamientos de dado",
                    backgroundColor : "blue",
                    data : [uno, dos, tres,cuatro,cinco,seis]
                }]
            }
        })
    
} 