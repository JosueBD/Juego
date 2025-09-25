document.addEventListener('DOMContentLoaded',()=>{
  const resEl=document.getElementById('resultado');
  const scoreEl=document.getElementById('score');
  let scoreJ=0, scorePC=0;
  const jugadas=['piedra','papel','tijera'];
  document.querySelector('.botones').onclick=(e)=>{
    const jugada=e.target.dataset.move;
    if(!jugada) return;
    const pc=jugadas[Math.floor(Math.random()*3)];
    let res;
    if(jugada===pc) res='Empate';
    else if(
      (jugada==='piedra'&&pc==='tijera')||
      (jugada==='papel'&&pc==='piedra')||
      (jugada==='tijera'&&pc==='papel')
    ){res='Ganaste';scoreJ++;}
    else{res='Perdiste';scorePC++;}
    resEl.textContent=`Tú: ${jugada} | PC: ${pc} → ${res}`;
    scoreEl.textContent=`Jugador: ${scoreJ} | PC: ${scorePC}`;
  };
});

