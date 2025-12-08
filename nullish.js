function nullish(bar) { 
    bar = bar ?? 55; 
    console.log(bar); 
} 
nullish(); // 55 
nullish(22); // 22