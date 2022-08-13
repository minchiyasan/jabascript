let num = 0;
for (let i = 1; i < 51; i++) {
  num = i;
  switch (num) {
    case 10:
      console.log("今10回ループしました");
      break;
    case 20:
      console.log("今20回ループしました");
      break;
    case 30:
      console.log("今30回ループしました");
      break;
    case 40:
      console.log("今40回ループしました");
      break;
    case 50:
      alert("50回カウントが終わりました");
  }

  if (num % 4 == 0) {
    console.log("4で割れる数です" + num);
  }
}


