
type HouseCoffee = {
  kind: "house";
  ouncesDrip: number;
};
 
type Latte = {
  kind: "latte";
  ouncesEspresso: number;
  milkToEspresso: 4;
};
 
type Cappuccino = {
  kind: "cappuccino";
  ouncesEspresso: number;
  milkToEspresso: 2;
};
 

type Coffee = HouseCoffee | Latte | Cappuccino;


function prepareCoffeeDrink(c: Coffee) {
  switch (c.kind) {
    case "cappuccino":
    case "latte":
      addEspresso(c.ouncesEspresso);
      addFrothedMilk(c.milkToEspresso * c.ouncesEspresso);
      break;
    case "house":
      addDripCoffee(c.ouncesDrip);
      break;
    default:
      assertExhaustive(c);
      break;
  }
}


export function assertExhaustive(
  value: never,
  message: string = 'Reached unexpected case in exhaustive switch'
): never {
  throw new Error(message);
}


type RequestA = {
  action: 'a';
  args: number[];
};
type RequestB = {
  action: 'b';
  message: string;
};

protocol.sendMessage(receiver, {
  action: 'a',
  args: [1, 2, 3],
});

type RequestResponseMessage<Req, Resp> = [Req, Resp];
type ResponseA = { result: string };
type ResponseB = { status: number };
type AMessage = RequestResponseMessage<RequestA, ResponseA>;
type BMessage = RequestResponseMessage<RequestB, ResponseB>;


const response = await protocol.sendMessage(receiver, { action: 'a', args: [1, 2, 3] });
console.log(`The result was: ${response.result}`);


type AOrBMessage = AMessage | BMessage;
const protocol = new WebSocketRequestResponseProtocol<AOrBMessage>();


const socket = new WebSocket('ws://localhost:8080');
socket.addEventListener('message', event => {
  return protocol.handleMessage((event, request: RequestType<AOrBMessage>) => {
    switch (request.action) {
      case 'a':
        console.log(JSON.stringify(request.args));
        return [request, { result: 'ok' }];
      case 'b':
        return [request, { status: 500 }];
      default:
        return assertExhaustive(request, `Uhoh, we didn't handle an action!`);
    }
  });
});