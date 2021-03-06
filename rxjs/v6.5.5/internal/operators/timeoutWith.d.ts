import { ObservableInput, OperatorFunction, SchedulerLike } from '../types.d.ts';
export declare function timeoutWith<T, R>(due: number | Date, withObservable: ObservableInput<R>, scheduler?: SchedulerLike): OperatorFunction<T, T | R>;
