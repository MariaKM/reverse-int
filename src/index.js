module.exports = function reverse(n) {

  i = 0;
  revNumStr = '';

  if (n < 0) {
    n = n * (-1);
    n = n.toString();

    while (i < n.length) {
      revNumStr += n[(n.length - 1) - i];

      i++;
    }

    // revNumStr = Number(revNumStr) * (-1);
    // revNumStr = Number(revNumStr);

  } else {

    n = n.toString();

    while (i < n.length) {
      revNumStr += n[(n.length - 1) - i];

      i++;
    }

    // revNumStr = Number(revNumStr);

  }

  revNumStr = Number(revNumStr);

  return revNumStr;

}
