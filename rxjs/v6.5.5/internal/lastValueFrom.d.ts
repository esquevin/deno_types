import { Observable } from './Observable.d.ts';
/**
 * Converts an observable to a promise by subscribing to the observable,
 * waiting for it to complete, and resolving the returned promise with the
 * last value from the observed stream.
 *
 * If the observable stream completes before any values were emitted, the
 * returned promise will reject with {@link EmptyError}.
 *
 * If the observable stream emits an error, the returned promise will reject
 * with that error.
 *
 * ### Example
 *
 * Wait for the last value from a stream and emit it from a promise in
 * an async function.
 *
 * ```ts
 * import { interval, lastValueFrom } from 'rxjs';
 * import { take } from 'rxjs/operators';
 *
 * async function execute() {
 *    const source$ = interval(2000).pipe(take(10));
 *    const finalNumber = await lastValueFrom(source$);
 *    console.log(`The final number is ${finalNumber}`);
 * }
 *
 * execute();
 *
 * // Expected output:
 * // "The final number is 9"
 * ```
 *
 * @param source the observable to convert to a promise
 */
export declare function lastValueFrom<T>(source: Observable<T>): Promise<T>;
