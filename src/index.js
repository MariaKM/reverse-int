function reverse(n) {

  i = 0;
  revNumStr = '';

  if (n < 0) {
    n = n * (-1);
    n = n.toString();
  }
  n = n.toString();
  while (i < n.length) {
    revNumStr += n[(n.length - 1) - i];

    i++;
  }

  revNumStr = Number(revNumStr);

  return revNumStr;

}

reverse(0);