const countDown = start => {
    console.log(start);
    if(start > 0) countDown(start-2);
  };
  
  countDown(10);