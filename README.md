
# ws-error

Create neat, nicely formatted errors for your websocket clients.

## Example

```typescript
import * as WSErr from "ws-error";

// Create an error to play around with
const error = WSErr.invalidData();

// Some attributes can be set after the fact.
// Errors can optionally have error codes
error.code(123);

// Errors can also have custom meta set after the fact.
error.extra({
	stuff: "things"
});

// These calls are chainable too
error.code(123).extra({stuff: "things"});

// Finally, you can turn this into JSON, or a string.
console.log(error.json());
console.log(error.string());

// All errors have default messages that go along with them, but you can override these.
const otherError = WSError.badLogin("learn2login");
```

## Error Types

Invalid Login `badLogin` (Bad login information from the client)

Invalid Data  `invalidData` (Bad data sent by the client)

Closing       `closing` (Indicates the server is closing)
