import { Observable } from './Observable.d.ts';
/**
 * Converts an observable to a promise by subscribing to the observable,
 * and returning a promise that will resolve as soon as the first value
 * arrives from the observable. The subscription will then be closed.
 *
 * If the observable stream completes before any values were emitted, the
 * returned promise will reject with {@link EmptyError}.
 *
 * If the observable stream emits an error, the returned promise will reject
 * with that error.
 *
 * ### Example
 *
 * Wait for the first value from a stream and emit it from a promise in
 * an async function.
 *
 * ```ts
 * import { interval, firstValueFrom } from 'rxjs';
 *
 * async function execute() {
 *    const source$ = interval(2000);
 *    const firstNumber = await firstValueFrom(source$);
 *    console.log(`The first number is ${firstNumber}`);
 * }
 *
 * execute();
 *
 * // Expected output:
 * // "The first number is 0"
 * ```
 *
 * @param source the observable to convert to a promise
 */
export declare function firstValueFrom<T>(source: Observable<T>): Promise<T>;
