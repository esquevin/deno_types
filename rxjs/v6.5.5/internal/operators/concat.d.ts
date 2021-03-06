import { ObservableInput, OperatorFunction, MonoTypeOperatorFunction, SchedulerLike } from '../types.d.ts';
/** @deprecated remove in v8. Use {@link concatWith} */
export declare function concat<T>(scheduler?: SchedulerLike): MonoTypeOperatorFunction<T>;
/** @deprecated remove in v8. Use {@link concatWith} */
export declare function concat<T, T2>(v2: ObservableInput<T2>, scheduler?: SchedulerLike): OperatorFunction<T, T | T2>;
/** @deprecated remove in v8. Use {@link concatWith} */
export declare function concat<T, T2, T3>(v2: ObservableInput<T2>, v3: ObservableInput<T3>, scheduler?: SchedulerLike): OperatorFunction<T, T | T2 | T3>;
/** @deprecated remove in v8. Use {@link concatWith} */
export declare function concat<T, T2, T3, T4>(v2: ObservableInput<T2>, v3: ObservableInput<T3>, v4: ObservableInput<T4>, scheduler?: SchedulerLike): OperatorFunction<T, T | T2 | T3 | T4>;
/** @deprecated remove in v8. Use {@link concatWith} */
export declare function concat<T, T2, T3, T4, T5>(v2: ObservableInput<T2>, v3: ObservableInput<T3>, v4: ObservableInput<T4>, v5: ObservableInput<T5>, scheduler?: SchedulerLike): OperatorFunction<T, T | T2 | T3 | T4 | T5>;
/** @deprecated remove in v8. Use {@link concatWith} */
export declare function concat<T, T2, T3, T4, T5, T6>(v2: ObservableInput<T2>, v3: ObservableInput<T3>, v4: ObservableInput<T4>, v5: ObservableInput<T5>, v6: ObservableInput<T6>, scheduler?: SchedulerLike): OperatorFunction<T, T | T2 | T3 | T4 | T5 | T6>;
/** @deprecated remove in v8. Use {@link concatWith} */
export declare function concat<T>(...observables: Array<ObservableInput<T> | SchedulerLike>): MonoTypeOperatorFunction<T>;
/** @deprecated remove in v8. Use {@link concatWith} */
export declare function concat<T, R>(...observables: Array<ObservableInput<any> | SchedulerLike>): OperatorFunction<T, R>;
