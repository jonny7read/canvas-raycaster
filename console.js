const LogLevel = {
  TRACE: 0,
  INFO: 1
}
const minimumLogLevel = LogLevel.INFO;

function log(msg, level) {
  if (level < minimumLogLevel) return;

  let trace = document.querySelector('#console');
  
  let list = trace.querySelector('ul');
  if (!list) {
    list = document.createElement('ul');
    trace.append(list);
  }
  
  let line = document.createElement('p');
  line.innerHTML = msg;
  
  trace.appendChild(line);
  trace.scrollTop = line.offsetTop + line.offsetHeight;
}

const trace = msg => log(msg, LogLevel.TRACE);
const info = msg => log(msg, LogLevel.INFO);