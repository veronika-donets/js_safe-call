function safeCall(f){
  try {
    f();
  }
  catch (error) {
    return false;
  }
  return true;
}
