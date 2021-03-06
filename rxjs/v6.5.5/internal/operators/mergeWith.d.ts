import { ObservableInput, OperatorFunction, MonoTypeOperatorFunction, SchedulerLike, ObservedValueUnionFromArray } from '../types.d.ts';
/** @deprecated use {@link mergeWith} */
export declare function merge<T>(): MonoTypeOperatorFunction<T>;
/** @deprecated use {@link mergeWith} */
export declare function merge<T, T2>(v2: ObservableInput<T2>): OperatorFunction<T, T | T2>;
/** @deprecated use {@link mergeWith} */
export declare function merge<T, T2, T3>(v2: ObservableInput<T2>, v3: ObservableInput<T3>): OperatorFunction<T, T | T2 | T3>;
/** @deprecated use {@link mergeWith} */
export declare function merge<T, T2, T3, T4>(v2: ObservableInput<T2>, v3: ObservableInput<T3>, v4: ObservableInput<T4>): OperatorFunction<T, T | T2 | T3 | T4>;
/** @deprecated use {@link mergeWith} */
export declare function merge<T, T2, T3, T4, T5>(v2: ObservableInput<T2>, v3: ObservableInput<T3>, v4: ObservableInput<T4>, v5: ObservableInput<T5>): OperatorFunction<T, T | T2 | T3 | T4 | T5>;
/** @deprecated use {@link mergeWith} */
export declare function merge<T, T2, T3, T4, T5, T6>(v2: ObservableInput<T2>, v3: ObservableInput<T3>, v4: ObservableInput<T4>, v5: ObservableInput<T5>, v6: ObservableInput<T6>): OperatorFunction<T, T | T2 | T3 | T4 | T5 | T6>;
/** @deprecated use static {@link merge} */
export declare function merge<T>(scheduler: SchedulerLike): MonoTypeOperatorFunction<T>;
/** @deprecated use static {@link merge} */
export declare function merge<T>(concurrent: number, scheduler?: SchedulerLike): MonoTypeOperatorFunction<T>;
/** @deprecated use static {@link merge} */
export declare function merge<T, T2>(v2: ObservableInput<T2>, scheduler: SchedulerLike): OperatorFunction<T, T | T2>;
/** @deprecated use static {@link merge} */
export declare function merge<T, T2>(v2: ObservableInput<T2>, concurrent: number, scheduler?: SchedulerLike): OperatorFunction<T, T | T2>;
/** @deprecated use static {@link merge} */
export declare function merge<T, T2, T3>(v2: ObservableInput<T2>, v3: ObservableInput<T3>, scheduler: SchedulerLike): OperatorFunction<T, T | T2 | T3>;
/** @deprecated use static {@link merge} */
export declare function merge<T, T2, T3>(v2: ObservableInput<T2>, v3: ObservableInput<T3>, concurrent: number, scheduler?: SchedulerLike): OperatorFunction<T, T | T2 | T3>;
/** @deprecated use static {@link merge} */
export declare function merge<T, T2, T3, T4>(v2: ObservableInput<T2>, v3: ObservableInput<T3>, v4: ObservableInput<T4>, scheduler: SchedulerLike): OperatorFunction<T, T | T2 | T3 | T4>;
/** @deprecated use static {@link merge} */
export declare function merge<T, T2, T3, T4>(v2: ObservableInput<T2>, v3: ObservableInput<T3>, v4: ObservableInput<T4>, concurrent: number, scheduler?: SchedulerLike): OperatorFunction<T, T | T2 | T3 | T4>;
/** @deprecated use static {@link merge} */
export declare function merge<T, T2, T3, T4, T5>(v2: ObservableInput<T2>, v3: ObservableInput<T3>, v4: ObservableInput<T4>, v5: ObservableInput<T5>, scheduler: SchedulerLike): OperatorFunction<T, T | T2 | T3 | T4 | T5>;
/** @deprecated use static {@link merge} */
export declare function merge<T, T2, T3, T4, T5>(v2: ObservableInput<T2>, v3: ObservableInput<T3>, v4: ObservableInput<T4>, v5: ObservableInput<T5>, concurrent: number, scheduler?: SchedulerLike): OperatorFunction<T, T | T2 | T3 | T4 | T5>;
/** @deprecated use static {@link merge} */
export declare function merge<T, T2, T3, T4, T5, T6>(v2: ObservableInput<T2>, v3: ObservableInput<T3>, v4: ObservableInput<T4>, v5: ObservableInput<T5>, v6: ObservableInput<T6>, scheduler: SchedulerLike): OperatorFunction<T, T | T2 | T3 | T4 | T5 | T6>;
/** @deprecated use static {@link merge} */
export declare function merge<T, T2, T3, T4, T5, T6>(v2: ObservableInput<T2>, v3: ObservableInput<T3>, v4: ObservableInput<T4>, v5: ObservableInput<T5>, v6: ObservableInput<T6>, concurrent: number, scheduler?: SchedulerLike): OperatorFunction<T, T | T2 | T3 | T4 | T5 | T6>;
/** @deprecated use static {@link merge} */
export declare function merge<T>(...observables: Array<ObservableInput<T> | SchedulerLike | number>): MonoTypeOperatorFunction<T>;
/** @deprecated use static {@link merge} */
export declare function merge<T, R>(...observables: Array<ObservableInput<any> | SchedulerLike | number>): OperatorFunction<T, R>;
export declare function mergeWith<T>(): OperatorFunction<T, T>;
export declare function mergeWith<T, A extends ObservableInput<any>[]>(...otherSources: A): OperatorFunction<T, (T | ObservedValueUnionFromArray<A>)>;
