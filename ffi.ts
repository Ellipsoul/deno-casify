const libName = 'lib.so';

// Open the shared C library
const lib = Deno.dlopen(libName, {
  toUpperCase: {
    // The function takes a pointer to a string as a parameter
    parameters: ['pointer'],
    // The function returns nothing
    result: 'void',
  },
});

function toCString(str: string): Uint8Array {
  const encoder = new TextEncoder();
  const buffer = encoder.encode(str + '\0'); // Null-terminated string
  return buffer;
}

// Convert a string to uppercase using the C library
export function toUpperCaseWithC(str: string): string {
  // Encode the string to a null-terminated buffer
  const buffer = toCString(str);
  // Get a pointer to the buffer
  const ptr = Deno.UnsafePointer.of(buffer);
  // Call the C function
  lib.symbols.toUpperCase(ptr);

  // Decode and return the modified string
  const decoder = new TextDecoder();
  return decoder.decode(buffer);
}
