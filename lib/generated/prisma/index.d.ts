
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Exam
 * 
 */
export type Exam = $Result.DefaultSelection<Prisma.$ExamPayload>
/**
 * Model Question
 * 
 */
export type Question = $Result.DefaultSelection<Prisma.$QuestionPayload>
/**
 * Model Answer
 * 
 */
export type Answer = $Result.DefaultSelection<Prisma.$AnswerPayload>
/**
 * Model ExamSubmission
 * 
 */
export type ExamSubmission = $Result.DefaultSelection<Prisma.$ExamSubmissionPayload>
/**
 * Model SubmissionAnswer
 * 
 */
export type SubmissionAnswer = $Result.DefaultSelection<Prisma.$SubmissionAnswerPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const QuestionType: {
  RADIO: 'RADIO',
  CHECKBOX: 'CHECKBOX'
};

export type QuestionType = (typeof QuestionType)[keyof typeof QuestionType]


export const Role: {
  TEACHER: 'TEACHER',
  STUDENT: 'STUDENT'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type QuestionType = $Enums.QuestionType

export const QuestionType: typeof $Enums.QuestionType

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.exam`: Exposes CRUD operations for the **Exam** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Exams
    * const exams = await prisma.exam.findMany()
    * ```
    */
  get exam(): Prisma.ExamDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.question`: Exposes CRUD operations for the **Question** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Questions
    * const questions = await prisma.question.findMany()
    * ```
    */
  get question(): Prisma.QuestionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.answer`: Exposes CRUD operations for the **Answer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Answers
    * const answers = await prisma.answer.findMany()
    * ```
    */
  get answer(): Prisma.AnswerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.examSubmission`: Exposes CRUD operations for the **ExamSubmission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExamSubmissions
    * const examSubmissions = await prisma.examSubmission.findMany()
    * ```
    */
  get examSubmission(): Prisma.ExamSubmissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.submissionAnswer`: Exposes CRUD operations for the **SubmissionAnswer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SubmissionAnswers
    * const submissionAnswers = await prisma.submissionAnswer.findMany()
    * ```
    */
  get submissionAnswer(): Prisma.SubmissionAnswerDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Exam: 'Exam',
    Question: 'Question',
    Answer: 'Answer',
    ExamSubmission: 'ExamSubmission',
    SubmissionAnswer: 'SubmissionAnswer'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "exam" | "question" | "answer" | "examSubmission" | "submissionAnswer"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Exam: {
        payload: Prisma.$ExamPayload<ExtArgs>
        fields: Prisma.ExamFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExamFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExamFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>
          }
          findFirst: {
            args: Prisma.ExamFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExamFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>
          }
          findMany: {
            args: Prisma.ExamFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>[]
          }
          create: {
            args: Prisma.ExamCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>
          }
          createMany: {
            args: Prisma.ExamCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExamCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>[]
          }
          delete: {
            args: Prisma.ExamDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>
          }
          update: {
            args: Prisma.ExamUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>
          }
          deleteMany: {
            args: Prisma.ExamDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExamUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExamUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>[]
          }
          upsert: {
            args: Prisma.ExamUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>
          }
          aggregate: {
            args: Prisma.ExamAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExam>
          }
          groupBy: {
            args: Prisma.ExamGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExamGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExamCountArgs<ExtArgs>
            result: $Utils.Optional<ExamCountAggregateOutputType> | number
          }
        }
      }
      Question: {
        payload: Prisma.$QuestionPayload<ExtArgs>
        fields: Prisma.QuestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findFirst: {
            args: Prisma.QuestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findMany: {
            args: Prisma.QuestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          create: {
            args: Prisma.QuestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          createMany: {
            args: Prisma.QuestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuestionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          delete: {
            args: Prisma.QuestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          update: {
            args: Prisma.QuestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          deleteMany: {
            args: Prisma.QuestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuestionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          upsert: {
            args: Prisma.QuestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          aggregate: {
            args: Prisma.QuestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestion>
          }
          groupBy: {
            args: Prisma.QuestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuestionCountArgs<ExtArgs>
            result: $Utils.Optional<QuestionCountAggregateOutputType> | number
          }
        }
      }
      Answer: {
        payload: Prisma.$AnswerPayload<ExtArgs>
        fields: Prisma.AnswerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnswerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnswerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          findFirst: {
            args: Prisma.AnswerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnswerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          findMany: {
            args: Prisma.AnswerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>[]
          }
          create: {
            args: Prisma.AnswerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          createMany: {
            args: Prisma.AnswerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnswerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>[]
          }
          delete: {
            args: Prisma.AnswerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          update: {
            args: Prisma.AnswerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          deleteMany: {
            args: Prisma.AnswerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnswerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnswerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>[]
          }
          upsert: {
            args: Prisma.AnswerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          aggregate: {
            args: Prisma.AnswerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnswer>
          }
          groupBy: {
            args: Prisma.AnswerGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnswerGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnswerCountArgs<ExtArgs>
            result: $Utils.Optional<AnswerCountAggregateOutputType> | number
          }
        }
      }
      ExamSubmission: {
        payload: Prisma.$ExamSubmissionPayload<ExtArgs>
        fields: Prisma.ExamSubmissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExamSubmissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamSubmissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExamSubmissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamSubmissionPayload>
          }
          findFirst: {
            args: Prisma.ExamSubmissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamSubmissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExamSubmissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamSubmissionPayload>
          }
          findMany: {
            args: Prisma.ExamSubmissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamSubmissionPayload>[]
          }
          create: {
            args: Prisma.ExamSubmissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamSubmissionPayload>
          }
          createMany: {
            args: Prisma.ExamSubmissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExamSubmissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamSubmissionPayload>[]
          }
          delete: {
            args: Prisma.ExamSubmissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamSubmissionPayload>
          }
          update: {
            args: Prisma.ExamSubmissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamSubmissionPayload>
          }
          deleteMany: {
            args: Prisma.ExamSubmissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExamSubmissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExamSubmissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamSubmissionPayload>[]
          }
          upsert: {
            args: Prisma.ExamSubmissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamSubmissionPayload>
          }
          aggregate: {
            args: Prisma.ExamSubmissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExamSubmission>
          }
          groupBy: {
            args: Prisma.ExamSubmissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExamSubmissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExamSubmissionCountArgs<ExtArgs>
            result: $Utils.Optional<ExamSubmissionCountAggregateOutputType> | number
          }
        }
      }
      SubmissionAnswer: {
        payload: Prisma.$SubmissionAnswerPayload<ExtArgs>
        fields: Prisma.SubmissionAnswerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubmissionAnswerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionAnswerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubmissionAnswerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionAnswerPayload>
          }
          findFirst: {
            args: Prisma.SubmissionAnswerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionAnswerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubmissionAnswerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionAnswerPayload>
          }
          findMany: {
            args: Prisma.SubmissionAnswerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionAnswerPayload>[]
          }
          create: {
            args: Prisma.SubmissionAnswerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionAnswerPayload>
          }
          createMany: {
            args: Prisma.SubmissionAnswerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubmissionAnswerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionAnswerPayload>[]
          }
          delete: {
            args: Prisma.SubmissionAnswerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionAnswerPayload>
          }
          update: {
            args: Prisma.SubmissionAnswerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionAnswerPayload>
          }
          deleteMany: {
            args: Prisma.SubmissionAnswerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubmissionAnswerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubmissionAnswerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionAnswerPayload>[]
          }
          upsert: {
            args: Prisma.SubmissionAnswerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionAnswerPayload>
          }
          aggregate: {
            args: Prisma.SubmissionAnswerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubmissionAnswer>
          }
          groupBy: {
            args: Prisma.SubmissionAnswerGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubmissionAnswerGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubmissionAnswerCountArgs<ExtArgs>
            result: $Utils.Optional<SubmissionAnswerCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    exam?: ExamOmit
    question?: QuestionOmit
    answer?: AnswerOmit
    examSubmission?: ExamSubmissionOmit
    submissionAnswer?: SubmissionAnswerOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    Exam: number
    ExamSubmission: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Exam?: boolean | UserCountOutputTypeCountExamArgs
    ExamSubmission?: boolean | UserCountOutputTypeCountExamSubmissionArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountExamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExamWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountExamSubmissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExamSubmissionWhereInput
  }


  /**
   * Count Type ExamCountOutputType
   */

  export type ExamCountOutputType = {
    questions: number
    ExamSubmission: number
  }

  export type ExamCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | ExamCountOutputTypeCountQuestionsArgs
    ExamSubmission?: boolean | ExamCountOutputTypeCountExamSubmissionArgs
  }

  // Custom InputTypes
  /**
   * ExamCountOutputType without action
   */
  export type ExamCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamCountOutputType
     */
    select?: ExamCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ExamCountOutputType without action
   */
  export type ExamCountOutputTypeCountQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
  }

  /**
   * ExamCountOutputType without action
   */
  export type ExamCountOutputTypeCountExamSubmissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExamSubmissionWhereInput
  }


  /**
   * Count Type QuestionCountOutputType
   */

  export type QuestionCountOutputType = {
    answers: number
    SubmissionAnswer: number
  }

  export type QuestionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    answers?: boolean | QuestionCountOutputTypeCountAnswersArgs
    SubmissionAnswer?: boolean | QuestionCountOutputTypeCountSubmissionAnswerArgs
  }

  // Custom InputTypes
  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionCountOutputType
     */
    select?: QuestionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeCountAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnswerWhereInput
  }

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeCountSubmissionAnswerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubmissionAnswerWhereInput
  }


  /**
   * Count Type ExamSubmissionCountOutputType
   */

  export type ExamSubmissionCountOutputType = {
    answers: number
  }

  export type ExamSubmissionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    answers?: boolean | ExamSubmissionCountOutputTypeCountAnswersArgs
  }

  // Custom InputTypes
  /**
   * ExamSubmissionCountOutputType without action
   */
  export type ExamSubmissionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamSubmissionCountOutputType
     */
    select?: ExamSubmissionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ExamSubmissionCountOutputType without action
   */
  export type ExamSubmissionCountOutputTypeCountAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubmissionAnswerWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    fullName: string | null
    email: string | null
    purpose: string | null
    institution: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    fullName: string | null
    email: string | null
    purpose: string | null
    institution: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    fullName: number
    email: number
    purpose: number
    institution: number
    password: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    purpose?: true
    institution?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    purpose?: true
    institution?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    purpose?: true
    institution?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    fullName: string
    email: string
    purpose: string
    institution: string
    password: string
    role: $Enums.Role
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    purpose?: boolean
    institution?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Exam?: boolean | User$ExamArgs<ExtArgs>
    ExamSubmission?: boolean | User$ExamSubmissionArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    purpose?: boolean
    institution?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    purpose?: boolean
    institution?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    fullName?: boolean
    email?: boolean
    purpose?: boolean
    institution?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullName" | "email" | "purpose" | "institution" | "password" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Exam?: boolean | User$ExamArgs<ExtArgs>
    ExamSubmission?: boolean | User$ExamSubmissionArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Exam: Prisma.$ExamPayload<ExtArgs>[]
      ExamSubmission: Prisma.$ExamSubmissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fullName: string
      email: string
      purpose: string
      institution: string
      password: string
      role: $Enums.Role
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Exam<T extends User$ExamArgs<ExtArgs> = {}>(args?: Subset<T, User$ExamArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ExamSubmission<T extends User$ExamSubmissionArgs<ExtArgs> = {}>(args?: Subset<T, User$ExamSubmissionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamSubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly fullName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly purpose: FieldRef<"User", 'String'>
    readonly institution: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.Exam
   */
  export type User$ExamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    where?: ExamWhereInput
    orderBy?: ExamOrderByWithRelationInput | ExamOrderByWithRelationInput[]
    cursor?: ExamWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExamScalarFieldEnum | ExamScalarFieldEnum[]
  }

  /**
   * User.ExamSubmission
   */
  export type User$ExamSubmissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamSubmission
     */
    select?: ExamSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamSubmission
     */
    omit?: ExamSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamSubmissionInclude<ExtArgs> | null
    where?: ExamSubmissionWhereInput
    orderBy?: ExamSubmissionOrderByWithRelationInput | ExamSubmissionOrderByWithRelationInput[]
    cursor?: ExamSubmissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExamSubmissionScalarFieldEnum | ExamSubmissionScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Exam
   */

  export type AggregateExam = {
    _count: ExamCountAggregateOutputType | null
    _avg: ExamAvgAggregateOutputType | null
    _sum: ExamSumAggregateOutputType | null
    _min: ExamMinAggregateOutputType | null
    _max: ExamMaxAggregateOutputType | null
  }

  export type ExamAvgAggregateOutputType = {
    duration: number | null
    minScore: number | null
  }

  export type ExamSumAggregateOutputType = {
    duration: number | null
    minScore: number | null
  }

  export type ExamMinAggregateOutputType = {
    id: string | null
    title: string | null
    tags: string | null
    category: string | null
    duration: number | null
    minScore: number | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    publishedAt: Date | null
    isDeleted: boolean | null
    deletedAt: Date | null
    authorId: string | null
  }

  export type ExamMaxAggregateOutputType = {
    id: string | null
    title: string | null
    tags: string | null
    category: string | null
    duration: number | null
    minScore: number | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    publishedAt: Date | null
    isDeleted: boolean | null
    deletedAt: Date | null
    authorId: string | null
  }

  export type ExamCountAggregateOutputType = {
    id: number
    title: number
    tags: number
    category: number
    duration: number
    minScore: number
    description: number
    createdAt: number
    updatedAt: number
    publishedAt: number
    isDeleted: number
    deletedAt: number
    authorId: number
    _all: number
  }


  export type ExamAvgAggregateInputType = {
    duration?: true
    minScore?: true
  }

  export type ExamSumAggregateInputType = {
    duration?: true
    minScore?: true
  }

  export type ExamMinAggregateInputType = {
    id?: true
    title?: true
    tags?: true
    category?: true
    duration?: true
    minScore?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    publishedAt?: true
    isDeleted?: true
    deletedAt?: true
    authorId?: true
  }

  export type ExamMaxAggregateInputType = {
    id?: true
    title?: true
    tags?: true
    category?: true
    duration?: true
    minScore?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    publishedAt?: true
    isDeleted?: true
    deletedAt?: true
    authorId?: true
  }

  export type ExamCountAggregateInputType = {
    id?: true
    title?: true
    tags?: true
    category?: true
    duration?: true
    minScore?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    publishedAt?: true
    isDeleted?: true
    deletedAt?: true
    authorId?: true
    _all?: true
  }

  export type ExamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Exam to aggregate.
     */
    where?: ExamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exams to fetch.
     */
    orderBy?: ExamOrderByWithRelationInput | ExamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Exams
    **/
    _count?: true | ExamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExamAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExamSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExamMaxAggregateInputType
  }

  export type GetExamAggregateType<T extends ExamAggregateArgs> = {
        [P in keyof T & keyof AggregateExam]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExam[P]>
      : GetScalarType<T[P], AggregateExam[P]>
  }




  export type ExamGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExamWhereInput
    orderBy?: ExamOrderByWithAggregationInput | ExamOrderByWithAggregationInput[]
    by: ExamScalarFieldEnum[] | ExamScalarFieldEnum
    having?: ExamScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExamCountAggregateInputType | true
    _avg?: ExamAvgAggregateInputType
    _sum?: ExamSumAggregateInputType
    _min?: ExamMinAggregateInputType
    _max?: ExamMaxAggregateInputType
  }

  export type ExamGroupByOutputType = {
    id: string
    title: string
    tags: string
    category: string
    duration: number
    minScore: number | null
    description: string | null
    createdAt: Date
    updatedAt: Date
    publishedAt: Date | null
    isDeleted: boolean
    deletedAt: Date | null
    authorId: string
    _count: ExamCountAggregateOutputType | null
    _avg: ExamAvgAggregateOutputType | null
    _sum: ExamSumAggregateOutputType | null
    _min: ExamMinAggregateOutputType | null
    _max: ExamMaxAggregateOutputType | null
  }

  type GetExamGroupByPayload<T extends ExamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExamGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExamGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExamGroupByOutputType[P]>
            : GetScalarType<T[P], ExamGroupByOutputType[P]>
        }
      >
    >


  export type ExamSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    tags?: boolean
    category?: boolean
    duration?: boolean
    minScore?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    publishedAt?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    authorId?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    questions?: boolean | Exam$questionsArgs<ExtArgs>
    ExamSubmission?: boolean | Exam$ExamSubmissionArgs<ExtArgs>
    _count?: boolean | ExamCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exam"]>

  export type ExamSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    tags?: boolean
    category?: boolean
    duration?: boolean
    minScore?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    publishedAt?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    authorId?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exam"]>

  export type ExamSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    tags?: boolean
    category?: boolean
    duration?: boolean
    minScore?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    publishedAt?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    authorId?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exam"]>

  export type ExamSelectScalar = {
    id?: boolean
    title?: boolean
    tags?: boolean
    category?: boolean
    duration?: boolean
    minScore?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    publishedAt?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    authorId?: boolean
  }

  export type ExamOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "tags" | "category" | "duration" | "minScore" | "description" | "createdAt" | "updatedAt" | "publishedAt" | "isDeleted" | "deletedAt" | "authorId", ExtArgs["result"]["exam"]>
  export type ExamInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    questions?: boolean | Exam$questionsArgs<ExtArgs>
    ExamSubmission?: boolean | Exam$ExamSubmissionArgs<ExtArgs>
    _count?: boolean | ExamCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ExamIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ExamIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ExamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Exam"
    objects: {
      author: Prisma.$UserPayload<ExtArgs>
      questions: Prisma.$QuestionPayload<ExtArgs>[]
      ExamSubmission: Prisma.$ExamSubmissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      tags: string
      category: string
      duration: number
      minScore: number | null
      description: string | null
      createdAt: Date
      updatedAt: Date
      publishedAt: Date | null
      isDeleted: boolean
      deletedAt: Date | null
      authorId: string
    }, ExtArgs["result"]["exam"]>
    composites: {}
  }

  type ExamGetPayload<S extends boolean | null | undefined | ExamDefaultArgs> = $Result.GetResult<Prisma.$ExamPayload, S>

  type ExamCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExamFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExamCountAggregateInputType | true
    }

  export interface ExamDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Exam'], meta: { name: 'Exam' } }
    /**
     * Find zero or one Exam that matches the filter.
     * @param {ExamFindUniqueArgs} args - Arguments to find a Exam
     * @example
     * // Get one Exam
     * const exam = await prisma.exam.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExamFindUniqueArgs>(args: SelectSubset<T, ExamFindUniqueArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Exam that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExamFindUniqueOrThrowArgs} args - Arguments to find a Exam
     * @example
     * // Get one Exam
     * const exam = await prisma.exam.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExamFindUniqueOrThrowArgs>(args: SelectSubset<T, ExamFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Exam that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamFindFirstArgs} args - Arguments to find a Exam
     * @example
     * // Get one Exam
     * const exam = await prisma.exam.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExamFindFirstArgs>(args?: SelectSubset<T, ExamFindFirstArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Exam that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamFindFirstOrThrowArgs} args - Arguments to find a Exam
     * @example
     * // Get one Exam
     * const exam = await prisma.exam.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExamFindFirstOrThrowArgs>(args?: SelectSubset<T, ExamFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Exams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Exams
     * const exams = await prisma.exam.findMany()
     * 
     * // Get first 10 Exams
     * const exams = await prisma.exam.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const examWithIdOnly = await prisma.exam.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExamFindManyArgs>(args?: SelectSubset<T, ExamFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Exam.
     * @param {ExamCreateArgs} args - Arguments to create a Exam.
     * @example
     * // Create one Exam
     * const Exam = await prisma.exam.create({
     *   data: {
     *     // ... data to create a Exam
     *   }
     * })
     * 
     */
    create<T extends ExamCreateArgs>(args: SelectSubset<T, ExamCreateArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Exams.
     * @param {ExamCreateManyArgs} args - Arguments to create many Exams.
     * @example
     * // Create many Exams
     * const exam = await prisma.exam.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExamCreateManyArgs>(args?: SelectSubset<T, ExamCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Exams and returns the data saved in the database.
     * @param {ExamCreateManyAndReturnArgs} args - Arguments to create many Exams.
     * @example
     * // Create many Exams
     * const exam = await prisma.exam.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Exams and only return the `id`
     * const examWithIdOnly = await prisma.exam.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExamCreateManyAndReturnArgs>(args?: SelectSubset<T, ExamCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Exam.
     * @param {ExamDeleteArgs} args - Arguments to delete one Exam.
     * @example
     * // Delete one Exam
     * const Exam = await prisma.exam.delete({
     *   where: {
     *     // ... filter to delete one Exam
     *   }
     * })
     * 
     */
    delete<T extends ExamDeleteArgs>(args: SelectSubset<T, ExamDeleteArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Exam.
     * @param {ExamUpdateArgs} args - Arguments to update one Exam.
     * @example
     * // Update one Exam
     * const exam = await prisma.exam.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExamUpdateArgs>(args: SelectSubset<T, ExamUpdateArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Exams.
     * @param {ExamDeleteManyArgs} args - Arguments to filter Exams to delete.
     * @example
     * // Delete a few Exams
     * const { count } = await prisma.exam.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExamDeleteManyArgs>(args?: SelectSubset<T, ExamDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Exams
     * const exam = await prisma.exam.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExamUpdateManyArgs>(args: SelectSubset<T, ExamUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exams and returns the data updated in the database.
     * @param {ExamUpdateManyAndReturnArgs} args - Arguments to update many Exams.
     * @example
     * // Update many Exams
     * const exam = await prisma.exam.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Exams and only return the `id`
     * const examWithIdOnly = await prisma.exam.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ExamUpdateManyAndReturnArgs>(args: SelectSubset<T, ExamUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Exam.
     * @param {ExamUpsertArgs} args - Arguments to update or create a Exam.
     * @example
     * // Update or create a Exam
     * const exam = await prisma.exam.upsert({
     *   create: {
     *     // ... data to create a Exam
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Exam we want to update
     *   }
     * })
     */
    upsert<T extends ExamUpsertArgs>(args: SelectSubset<T, ExamUpsertArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Exams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamCountArgs} args - Arguments to filter Exams to count.
     * @example
     * // Count the number of Exams
     * const count = await prisma.exam.count({
     *   where: {
     *     // ... the filter for the Exams we want to count
     *   }
     * })
    **/
    count<T extends ExamCountArgs>(
      args?: Subset<T, ExamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Exam.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExamAggregateArgs>(args: Subset<T, ExamAggregateArgs>): Prisma.PrismaPromise<GetExamAggregateType<T>>

    /**
     * Group by Exam.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExamGroupByArgs['orderBy'] }
        : { orderBy?: ExamGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Exam model
   */
  readonly fields: ExamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Exam.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExamClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    questions<T extends Exam$questionsArgs<ExtArgs> = {}>(args?: Subset<T, Exam$questionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ExamSubmission<T extends Exam$ExamSubmissionArgs<ExtArgs> = {}>(args?: Subset<T, Exam$ExamSubmissionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamSubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Exam model
   */
  interface ExamFieldRefs {
    readonly id: FieldRef<"Exam", 'String'>
    readonly title: FieldRef<"Exam", 'String'>
    readonly tags: FieldRef<"Exam", 'String'>
    readonly category: FieldRef<"Exam", 'String'>
    readonly duration: FieldRef<"Exam", 'Int'>
    readonly minScore: FieldRef<"Exam", 'Int'>
    readonly description: FieldRef<"Exam", 'String'>
    readonly createdAt: FieldRef<"Exam", 'DateTime'>
    readonly updatedAt: FieldRef<"Exam", 'DateTime'>
    readonly publishedAt: FieldRef<"Exam", 'DateTime'>
    readonly isDeleted: FieldRef<"Exam", 'Boolean'>
    readonly deletedAt: FieldRef<"Exam", 'DateTime'>
    readonly authorId: FieldRef<"Exam", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Exam findUnique
   */
  export type ExamFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * Filter, which Exam to fetch.
     */
    where: ExamWhereUniqueInput
  }

  /**
   * Exam findUniqueOrThrow
   */
  export type ExamFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * Filter, which Exam to fetch.
     */
    where: ExamWhereUniqueInput
  }

  /**
   * Exam findFirst
   */
  export type ExamFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * Filter, which Exam to fetch.
     */
    where?: ExamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exams to fetch.
     */
    orderBy?: ExamOrderByWithRelationInput | ExamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Exams.
     */
    cursor?: ExamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Exams.
     */
    distinct?: ExamScalarFieldEnum | ExamScalarFieldEnum[]
  }

  /**
   * Exam findFirstOrThrow
   */
  export type ExamFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * Filter, which Exam to fetch.
     */
    where?: ExamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exams to fetch.
     */
    orderBy?: ExamOrderByWithRelationInput | ExamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Exams.
     */
    cursor?: ExamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Exams.
     */
    distinct?: ExamScalarFieldEnum | ExamScalarFieldEnum[]
  }

  /**
   * Exam findMany
   */
  export type ExamFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * Filter, which Exams to fetch.
     */
    where?: ExamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exams to fetch.
     */
    orderBy?: ExamOrderByWithRelationInput | ExamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Exams.
     */
    cursor?: ExamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exams.
     */
    skip?: number
    distinct?: ExamScalarFieldEnum | ExamScalarFieldEnum[]
  }

  /**
   * Exam create
   */
  export type ExamCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * The data needed to create a Exam.
     */
    data: XOR<ExamCreateInput, ExamUncheckedCreateInput>
  }

  /**
   * Exam createMany
   */
  export type ExamCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Exams.
     */
    data: ExamCreateManyInput | ExamCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Exam createManyAndReturn
   */
  export type ExamCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * The data used to create many Exams.
     */
    data: ExamCreateManyInput | ExamCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Exam update
   */
  export type ExamUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * The data needed to update a Exam.
     */
    data: XOR<ExamUpdateInput, ExamUncheckedUpdateInput>
    /**
     * Choose, which Exam to update.
     */
    where: ExamWhereUniqueInput
  }

  /**
   * Exam updateMany
   */
  export type ExamUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Exams.
     */
    data: XOR<ExamUpdateManyMutationInput, ExamUncheckedUpdateManyInput>
    /**
     * Filter which Exams to update
     */
    where?: ExamWhereInput
    /**
     * Limit how many Exams to update.
     */
    limit?: number
  }

  /**
   * Exam updateManyAndReturn
   */
  export type ExamUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * The data used to update Exams.
     */
    data: XOR<ExamUpdateManyMutationInput, ExamUncheckedUpdateManyInput>
    /**
     * Filter which Exams to update
     */
    where?: ExamWhereInput
    /**
     * Limit how many Exams to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Exam upsert
   */
  export type ExamUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * The filter to search for the Exam to update in case it exists.
     */
    where: ExamWhereUniqueInput
    /**
     * In case the Exam found by the `where` argument doesn't exist, create a new Exam with this data.
     */
    create: XOR<ExamCreateInput, ExamUncheckedCreateInput>
    /**
     * In case the Exam was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExamUpdateInput, ExamUncheckedUpdateInput>
  }

  /**
   * Exam delete
   */
  export type ExamDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * Filter which Exam to delete.
     */
    where: ExamWhereUniqueInput
  }

  /**
   * Exam deleteMany
   */
  export type ExamDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Exams to delete
     */
    where?: ExamWhereInput
    /**
     * Limit how many Exams to delete.
     */
    limit?: number
  }

  /**
   * Exam.questions
   */
  export type Exam$questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    cursor?: QuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Exam.ExamSubmission
   */
  export type Exam$ExamSubmissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamSubmission
     */
    select?: ExamSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamSubmission
     */
    omit?: ExamSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamSubmissionInclude<ExtArgs> | null
    where?: ExamSubmissionWhereInput
    orderBy?: ExamSubmissionOrderByWithRelationInput | ExamSubmissionOrderByWithRelationInput[]
    cursor?: ExamSubmissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExamSubmissionScalarFieldEnum | ExamSubmissionScalarFieldEnum[]
  }

  /**
   * Exam without action
   */
  export type ExamDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
  }


  /**
   * Model Question
   */

  export type AggregateQuestion = {
    _count: QuestionCountAggregateOutputType | null
    _avg: QuestionAvgAggregateOutputType | null
    _sum: QuestionSumAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  export type QuestionAvgAggregateOutputType = {
    correctAnswerIndex: number | null
  }

  export type QuestionSumAggregateOutputType = {
    correctAnswerIndex: number | null
  }

  export type QuestionMinAggregateOutputType = {
    id: string | null
    title: string | null
    image: string | null
    imageLabel: string | null
    type: $Enums.QuestionType | null
    examId: string | null
    createdAt: Date | null
    correctAnswerIndex: number | null
  }

  export type QuestionMaxAggregateOutputType = {
    id: string | null
    title: string | null
    image: string | null
    imageLabel: string | null
    type: $Enums.QuestionType | null
    examId: string | null
    createdAt: Date | null
    correctAnswerIndex: number | null
  }

  export type QuestionCountAggregateOutputType = {
    id: number
    title: number
    image: number
    imageLabel: number
    type: number
    examId: number
    createdAt: number
    correctAnswerIndex: number
    _all: number
  }


  export type QuestionAvgAggregateInputType = {
    correctAnswerIndex?: true
  }

  export type QuestionSumAggregateInputType = {
    correctAnswerIndex?: true
  }

  export type QuestionMinAggregateInputType = {
    id?: true
    title?: true
    image?: true
    imageLabel?: true
    type?: true
    examId?: true
    createdAt?: true
    correctAnswerIndex?: true
  }

  export type QuestionMaxAggregateInputType = {
    id?: true
    title?: true
    image?: true
    imageLabel?: true
    type?: true
    examId?: true
    createdAt?: true
    correctAnswerIndex?: true
  }

  export type QuestionCountAggregateInputType = {
    id?: true
    title?: true
    image?: true
    imageLabel?: true
    type?: true
    examId?: true
    createdAt?: true
    correctAnswerIndex?: true
    _all?: true
  }

  export type QuestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Question to aggregate.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Questions
    **/
    _count?: true | QuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuestionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuestionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionMaxAggregateInputType
  }

  export type GetQuestionAggregateType<T extends QuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestion[P]>
      : GetScalarType<T[P], AggregateQuestion[P]>
  }




  export type QuestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithAggregationInput | QuestionOrderByWithAggregationInput[]
    by: QuestionScalarFieldEnum[] | QuestionScalarFieldEnum
    having?: QuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionCountAggregateInputType | true
    _avg?: QuestionAvgAggregateInputType
    _sum?: QuestionSumAggregateInputType
    _min?: QuestionMinAggregateInputType
    _max?: QuestionMaxAggregateInputType
  }

  export type QuestionGroupByOutputType = {
    id: string
    title: string
    image: string | null
    imageLabel: string | null
    type: $Enums.QuestionType
    examId: string
    createdAt: Date
    correctAnswerIndex: number | null
    _count: QuestionCountAggregateOutputType | null
    _avg: QuestionAvgAggregateOutputType | null
    _sum: QuestionSumAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  type GetQuestionGroupByPayload<T extends QuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionGroupByOutputType[P]>
        }
      >
    >


  export type QuestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    image?: boolean
    imageLabel?: boolean
    type?: boolean
    examId?: boolean
    createdAt?: boolean
    correctAnswerIndex?: boolean
    exam?: boolean | ExamDefaultArgs<ExtArgs>
    answers?: boolean | Question$answersArgs<ExtArgs>
    SubmissionAnswer?: boolean | Question$SubmissionAnswerArgs<ExtArgs>
    _count?: boolean | QuestionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    image?: boolean
    imageLabel?: boolean
    type?: boolean
    examId?: boolean
    createdAt?: boolean
    correctAnswerIndex?: boolean
    exam?: boolean | ExamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    image?: boolean
    imageLabel?: boolean
    type?: boolean
    examId?: boolean
    createdAt?: boolean
    correctAnswerIndex?: boolean
    exam?: boolean | ExamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectScalar = {
    id?: boolean
    title?: boolean
    image?: boolean
    imageLabel?: boolean
    type?: boolean
    examId?: boolean
    createdAt?: boolean
    correctAnswerIndex?: boolean
  }

  export type QuestionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "image" | "imageLabel" | "type" | "examId" | "createdAt" | "correctAnswerIndex", ExtArgs["result"]["question"]>
  export type QuestionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exam?: boolean | ExamDefaultArgs<ExtArgs>
    answers?: boolean | Question$answersArgs<ExtArgs>
    SubmissionAnswer?: boolean | Question$SubmissionAnswerArgs<ExtArgs>
    _count?: boolean | QuestionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type QuestionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exam?: boolean | ExamDefaultArgs<ExtArgs>
  }
  export type QuestionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exam?: boolean | ExamDefaultArgs<ExtArgs>
  }

  export type $QuestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Question"
    objects: {
      exam: Prisma.$ExamPayload<ExtArgs>
      answers: Prisma.$AnswerPayload<ExtArgs>[]
      SubmissionAnswer: Prisma.$SubmissionAnswerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      image: string | null
      imageLabel: string | null
      type: $Enums.QuestionType
      examId: string
      createdAt: Date
      correctAnswerIndex: number | null
    }, ExtArgs["result"]["question"]>
    composites: {}
  }

  type QuestionGetPayload<S extends boolean | null | undefined | QuestionDefaultArgs> = $Result.GetResult<Prisma.$QuestionPayload, S>

  type QuestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuestionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuestionCountAggregateInputType | true
    }

  export interface QuestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Question'], meta: { name: 'Question' } }
    /**
     * Find zero or one Question that matches the filter.
     * @param {QuestionFindUniqueArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuestionFindUniqueArgs>(args: SelectSubset<T, QuestionFindUniqueArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Question that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuestionFindUniqueOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuestionFindUniqueOrThrowArgs>(args: SelectSubset<T, QuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuestionFindFirstArgs>(args?: SelectSubset<T, QuestionFindFirstArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuestionFindFirstOrThrowArgs>(args?: SelectSubset<T, QuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Questions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Questions
     * const questions = await prisma.question.findMany()
     * 
     * // Get first 10 Questions
     * const questions = await prisma.question.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questionWithIdOnly = await prisma.question.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuestionFindManyArgs>(args?: SelectSubset<T, QuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Question.
     * @param {QuestionCreateArgs} args - Arguments to create a Question.
     * @example
     * // Create one Question
     * const Question = await prisma.question.create({
     *   data: {
     *     // ... data to create a Question
     *   }
     * })
     * 
     */
    create<T extends QuestionCreateArgs>(args: SelectSubset<T, QuestionCreateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Questions.
     * @param {QuestionCreateManyArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuestionCreateManyArgs>(args?: SelectSubset<T, QuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Questions and returns the data saved in the database.
     * @param {QuestionCreateManyAndReturnArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Questions and only return the `id`
     * const questionWithIdOnly = await prisma.question.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuestionCreateManyAndReturnArgs>(args?: SelectSubset<T, QuestionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Question.
     * @param {QuestionDeleteArgs} args - Arguments to delete one Question.
     * @example
     * // Delete one Question
     * const Question = await prisma.question.delete({
     *   where: {
     *     // ... filter to delete one Question
     *   }
     * })
     * 
     */
    delete<T extends QuestionDeleteArgs>(args: SelectSubset<T, QuestionDeleteArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Question.
     * @param {QuestionUpdateArgs} args - Arguments to update one Question.
     * @example
     * // Update one Question
     * const question = await prisma.question.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuestionUpdateArgs>(args: SelectSubset<T, QuestionUpdateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Questions.
     * @param {QuestionDeleteManyArgs} args - Arguments to filter Questions to delete.
     * @example
     * // Delete a few Questions
     * const { count } = await prisma.question.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuestionDeleteManyArgs>(args?: SelectSubset<T, QuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuestionUpdateManyArgs>(args: SelectSubset<T, QuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions and returns the data updated in the database.
     * @param {QuestionUpdateManyAndReturnArgs} args - Arguments to update many Questions.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Questions and only return the `id`
     * const questionWithIdOnly = await prisma.question.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends QuestionUpdateManyAndReturnArgs>(args: SelectSubset<T, QuestionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Question.
     * @param {QuestionUpsertArgs} args - Arguments to update or create a Question.
     * @example
     * // Update or create a Question
     * const question = await prisma.question.upsert({
     *   create: {
     *     // ... data to create a Question
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Question we want to update
     *   }
     * })
     */
    upsert<T extends QuestionUpsertArgs>(args: SelectSubset<T, QuestionUpsertArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionCountArgs} args - Arguments to filter Questions to count.
     * @example
     * // Count the number of Questions
     * const count = await prisma.question.count({
     *   where: {
     *     // ... the filter for the Questions we want to count
     *   }
     * })
    **/
    count<T extends QuestionCountArgs>(
      args?: Subset<T, QuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QuestionAggregateArgs>(args: Subset<T, QuestionAggregateArgs>): Prisma.PrismaPromise<GetQuestionAggregateType<T>>

    /**
     * Group by Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends QuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestionGroupByArgs['orderBy'] }
        : { orderBy?: QuestionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Question model
   */
  readonly fields: QuestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Question.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    exam<T extends ExamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExamDefaultArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    answers<T extends Question$answersArgs<ExtArgs> = {}>(args?: Subset<T, Question$answersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    SubmissionAnswer<T extends Question$SubmissionAnswerArgs<ExtArgs> = {}>(args?: Subset<T, Question$SubmissionAnswerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionAnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Question model
   */
  interface QuestionFieldRefs {
    readonly id: FieldRef<"Question", 'String'>
    readonly title: FieldRef<"Question", 'String'>
    readonly image: FieldRef<"Question", 'String'>
    readonly imageLabel: FieldRef<"Question", 'String'>
    readonly type: FieldRef<"Question", 'QuestionType'>
    readonly examId: FieldRef<"Question", 'String'>
    readonly createdAt: FieldRef<"Question", 'DateTime'>
    readonly correctAnswerIndex: FieldRef<"Question", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Question findUnique
   */
  export type QuestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findUniqueOrThrow
   */
  export type QuestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findFirst
   */
  export type QuestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findFirstOrThrow
   */
  export type QuestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findMany
   */
  export type QuestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Questions to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question create
   */
  export type QuestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to create a Question.
     */
    data: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
  }

  /**
   * Question createMany
   */
  export type QuestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Question createManyAndReturn
   */
  export type QuestionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Question update
   */
  export type QuestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to update a Question.
     */
    data: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
    /**
     * Choose, which Question to update.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question updateMany
   */
  export type QuestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to update.
     */
    limit?: number
  }

  /**
   * Question updateManyAndReturn
   */
  export type QuestionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Question upsert
   */
  export type QuestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The filter to search for the Question to update in case it exists.
     */
    where: QuestionWhereUniqueInput
    /**
     * In case the Question found by the `where` argument doesn't exist, create a new Question with this data.
     */
    create: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
    /**
     * In case the Question was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
  }

  /**
   * Question delete
   */
  export type QuestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter which Question to delete.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question deleteMany
   */
  export type QuestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Questions to delete
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to delete.
     */
    limit?: number
  }

  /**
   * Question.answers
   */
  export type Question$answersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    where?: AnswerWhereInput
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    cursor?: AnswerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * Question.SubmissionAnswer
   */
  export type Question$SubmissionAnswerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubmissionAnswer
     */
    select?: SubmissionAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubmissionAnswer
     */
    omit?: SubmissionAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionAnswerInclude<ExtArgs> | null
    where?: SubmissionAnswerWhereInput
    orderBy?: SubmissionAnswerOrderByWithRelationInput | SubmissionAnswerOrderByWithRelationInput[]
    cursor?: SubmissionAnswerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubmissionAnswerScalarFieldEnum | SubmissionAnswerScalarFieldEnum[]
  }

  /**
   * Question without action
   */
  export type QuestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
  }


  /**
   * Model Answer
   */

  export type AggregateAnswer = {
    _count: AnswerCountAggregateOutputType | null
    _min: AnswerMinAggregateOutputType | null
    _max: AnswerMaxAggregateOutputType | null
  }

  export type AnswerMinAggregateOutputType = {
    id: string | null
    answerText: string | null
    isCorrect: boolean | null
    questionId: string | null
  }

  export type AnswerMaxAggregateOutputType = {
    id: string | null
    answerText: string | null
    isCorrect: boolean | null
    questionId: string | null
  }

  export type AnswerCountAggregateOutputType = {
    id: number
    answerText: number
    isCorrect: number
    questionId: number
    _all: number
  }


  export type AnswerMinAggregateInputType = {
    id?: true
    answerText?: true
    isCorrect?: true
    questionId?: true
  }

  export type AnswerMaxAggregateInputType = {
    id?: true
    answerText?: true
    isCorrect?: true
    questionId?: true
  }

  export type AnswerCountAggregateInputType = {
    id?: true
    answerText?: true
    isCorrect?: true
    questionId?: true
    _all?: true
  }

  export type AnswerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Answer to aggregate.
     */
    where?: AnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Answers
    **/
    _count?: true | AnswerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnswerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnswerMaxAggregateInputType
  }

  export type GetAnswerAggregateType<T extends AnswerAggregateArgs> = {
        [P in keyof T & keyof AggregateAnswer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnswer[P]>
      : GetScalarType<T[P], AggregateAnswer[P]>
  }




  export type AnswerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnswerWhereInput
    orderBy?: AnswerOrderByWithAggregationInput | AnswerOrderByWithAggregationInput[]
    by: AnswerScalarFieldEnum[] | AnswerScalarFieldEnum
    having?: AnswerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnswerCountAggregateInputType | true
    _min?: AnswerMinAggregateInputType
    _max?: AnswerMaxAggregateInputType
  }

  export type AnswerGroupByOutputType = {
    id: string
    answerText: string
    isCorrect: boolean
    questionId: string
    _count: AnswerCountAggregateOutputType | null
    _min: AnswerMinAggregateOutputType | null
    _max: AnswerMaxAggregateOutputType | null
  }

  type GetAnswerGroupByPayload<T extends AnswerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnswerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnswerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnswerGroupByOutputType[P]>
            : GetScalarType<T[P], AnswerGroupByOutputType[P]>
        }
      >
    >


  export type AnswerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    answerText?: boolean
    isCorrect?: boolean
    questionId?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["answer"]>

  export type AnswerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    answerText?: boolean
    isCorrect?: boolean
    questionId?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["answer"]>

  export type AnswerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    answerText?: boolean
    isCorrect?: boolean
    questionId?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["answer"]>

  export type AnswerSelectScalar = {
    id?: boolean
    answerText?: boolean
    isCorrect?: boolean
    questionId?: boolean
  }

  export type AnswerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "answerText" | "isCorrect" | "questionId", ExtArgs["result"]["answer"]>
  export type AnswerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }
  export type AnswerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }
  export type AnswerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }

  export type $AnswerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Answer"
    objects: {
      question: Prisma.$QuestionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      answerText: string
      isCorrect: boolean
      questionId: string
    }, ExtArgs["result"]["answer"]>
    composites: {}
  }

  type AnswerGetPayload<S extends boolean | null | undefined | AnswerDefaultArgs> = $Result.GetResult<Prisma.$AnswerPayload, S>

  type AnswerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnswerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnswerCountAggregateInputType | true
    }

  export interface AnswerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Answer'], meta: { name: 'Answer' } }
    /**
     * Find zero or one Answer that matches the filter.
     * @param {AnswerFindUniqueArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnswerFindUniqueArgs>(args: SelectSubset<T, AnswerFindUniqueArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Answer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnswerFindUniqueOrThrowArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnswerFindUniqueOrThrowArgs>(args: SelectSubset<T, AnswerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Answer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerFindFirstArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnswerFindFirstArgs>(args?: SelectSubset<T, AnswerFindFirstArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Answer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerFindFirstOrThrowArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnswerFindFirstOrThrowArgs>(args?: SelectSubset<T, AnswerFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Answers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Answers
     * const answers = await prisma.answer.findMany()
     * 
     * // Get first 10 Answers
     * const answers = await prisma.answer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const answerWithIdOnly = await prisma.answer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnswerFindManyArgs>(args?: SelectSubset<T, AnswerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Answer.
     * @param {AnswerCreateArgs} args - Arguments to create a Answer.
     * @example
     * // Create one Answer
     * const Answer = await prisma.answer.create({
     *   data: {
     *     // ... data to create a Answer
     *   }
     * })
     * 
     */
    create<T extends AnswerCreateArgs>(args: SelectSubset<T, AnswerCreateArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Answers.
     * @param {AnswerCreateManyArgs} args - Arguments to create many Answers.
     * @example
     * // Create many Answers
     * const answer = await prisma.answer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnswerCreateManyArgs>(args?: SelectSubset<T, AnswerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Answers and returns the data saved in the database.
     * @param {AnswerCreateManyAndReturnArgs} args - Arguments to create many Answers.
     * @example
     * // Create many Answers
     * const answer = await prisma.answer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Answers and only return the `id`
     * const answerWithIdOnly = await prisma.answer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnswerCreateManyAndReturnArgs>(args?: SelectSubset<T, AnswerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Answer.
     * @param {AnswerDeleteArgs} args - Arguments to delete one Answer.
     * @example
     * // Delete one Answer
     * const Answer = await prisma.answer.delete({
     *   where: {
     *     // ... filter to delete one Answer
     *   }
     * })
     * 
     */
    delete<T extends AnswerDeleteArgs>(args: SelectSubset<T, AnswerDeleteArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Answer.
     * @param {AnswerUpdateArgs} args - Arguments to update one Answer.
     * @example
     * // Update one Answer
     * const answer = await prisma.answer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnswerUpdateArgs>(args: SelectSubset<T, AnswerUpdateArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Answers.
     * @param {AnswerDeleteManyArgs} args - Arguments to filter Answers to delete.
     * @example
     * // Delete a few Answers
     * const { count } = await prisma.answer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnswerDeleteManyArgs>(args?: SelectSubset<T, AnswerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Answers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Answers
     * const answer = await prisma.answer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnswerUpdateManyArgs>(args: SelectSubset<T, AnswerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Answers and returns the data updated in the database.
     * @param {AnswerUpdateManyAndReturnArgs} args - Arguments to update many Answers.
     * @example
     * // Update many Answers
     * const answer = await prisma.answer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Answers and only return the `id`
     * const answerWithIdOnly = await prisma.answer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AnswerUpdateManyAndReturnArgs>(args: SelectSubset<T, AnswerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Answer.
     * @param {AnswerUpsertArgs} args - Arguments to update or create a Answer.
     * @example
     * // Update or create a Answer
     * const answer = await prisma.answer.upsert({
     *   create: {
     *     // ... data to create a Answer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Answer we want to update
     *   }
     * })
     */
    upsert<T extends AnswerUpsertArgs>(args: SelectSubset<T, AnswerUpsertArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Answers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerCountArgs} args - Arguments to filter Answers to count.
     * @example
     * // Count the number of Answers
     * const count = await prisma.answer.count({
     *   where: {
     *     // ... the filter for the Answers we want to count
     *   }
     * })
    **/
    count<T extends AnswerCountArgs>(
      args?: Subset<T, AnswerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnswerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Answer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AnswerAggregateArgs>(args: Subset<T, AnswerAggregateArgs>): Prisma.PrismaPromise<GetAnswerAggregateType<T>>

    /**
     * Group by Answer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AnswerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnswerGroupByArgs['orderBy'] }
        : { orderBy?: AnswerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AnswerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnswerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Answer model
   */
  readonly fields: AnswerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Answer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnswerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    question<T extends QuestionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestionDefaultArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Answer model
   */
  interface AnswerFieldRefs {
    readonly id: FieldRef<"Answer", 'String'>
    readonly answerText: FieldRef<"Answer", 'String'>
    readonly isCorrect: FieldRef<"Answer", 'Boolean'>
    readonly questionId: FieldRef<"Answer", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Answer findUnique
   */
  export type AnswerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answer to fetch.
     */
    where: AnswerWhereUniqueInput
  }

  /**
   * Answer findUniqueOrThrow
   */
  export type AnswerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answer to fetch.
     */
    where: AnswerWhereUniqueInput
  }

  /**
   * Answer findFirst
   */
  export type AnswerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answer to fetch.
     */
    where?: AnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Answers.
     */
    cursor?: AnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Answers.
     */
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * Answer findFirstOrThrow
   */
  export type AnswerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answer to fetch.
     */
    where?: AnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Answers.
     */
    cursor?: AnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Answers.
     */
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * Answer findMany
   */
  export type AnswerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answers to fetch.
     */
    where?: AnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Answers.
     */
    cursor?: AnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * Answer create
   */
  export type AnswerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * The data needed to create a Answer.
     */
    data: XOR<AnswerCreateInput, AnswerUncheckedCreateInput>
  }

  /**
   * Answer createMany
   */
  export type AnswerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Answers.
     */
    data: AnswerCreateManyInput | AnswerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Answer createManyAndReturn
   */
  export type AnswerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * The data used to create many Answers.
     */
    data: AnswerCreateManyInput | AnswerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Answer update
   */
  export type AnswerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * The data needed to update a Answer.
     */
    data: XOR<AnswerUpdateInput, AnswerUncheckedUpdateInput>
    /**
     * Choose, which Answer to update.
     */
    where: AnswerWhereUniqueInput
  }

  /**
   * Answer updateMany
   */
  export type AnswerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Answers.
     */
    data: XOR<AnswerUpdateManyMutationInput, AnswerUncheckedUpdateManyInput>
    /**
     * Filter which Answers to update
     */
    where?: AnswerWhereInput
    /**
     * Limit how many Answers to update.
     */
    limit?: number
  }

  /**
   * Answer updateManyAndReturn
   */
  export type AnswerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * The data used to update Answers.
     */
    data: XOR<AnswerUpdateManyMutationInput, AnswerUncheckedUpdateManyInput>
    /**
     * Filter which Answers to update
     */
    where?: AnswerWhereInput
    /**
     * Limit how many Answers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Answer upsert
   */
  export type AnswerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * The filter to search for the Answer to update in case it exists.
     */
    where: AnswerWhereUniqueInput
    /**
     * In case the Answer found by the `where` argument doesn't exist, create a new Answer with this data.
     */
    create: XOR<AnswerCreateInput, AnswerUncheckedCreateInput>
    /**
     * In case the Answer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnswerUpdateInput, AnswerUncheckedUpdateInput>
  }

  /**
   * Answer delete
   */
  export type AnswerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter which Answer to delete.
     */
    where: AnswerWhereUniqueInput
  }

  /**
   * Answer deleteMany
   */
  export type AnswerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Answers to delete
     */
    where?: AnswerWhereInput
    /**
     * Limit how many Answers to delete.
     */
    limit?: number
  }

  /**
   * Answer without action
   */
  export type AnswerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
  }


  /**
   * Model ExamSubmission
   */

  export type AggregateExamSubmission = {
    _count: ExamSubmissionCountAggregateOutputType | null
    _avg: ExamSubmissionAvgAggregateOutputType | null
    _sum: ExamSubmissionSumAggregateOutputType | null
    _min: ExamSubmissionMinAggregateOutputType | null
    _max: ExamSubmissionMaxAggregateOutputType | null
  }

  export type ExamSubmissionAvgAggregateOutputType = {
    score: number | null
    correct: number | null
    incorrect: number | null
  }

  export type ExamSubmissionSumAggregateOutputType = {
    score: number | null
    correct: number | null
    incorrect: number | null
  }

  export type ExamSubmissionMinAggregateOutputType = {
    id: string | null
    examId: string | null
    userId: string | null
    submittedAt: Date | null
    expireAt: Date | null
    score: number | null
    correct: number | null
    incorrect: number | null
    passed: boolean | null
    updatedAt: Date | null
  }

  export type ExamSubmissionMaxAggregateOutputType = {
    id: string | null
    examId: string | null
    userId: string | null
    submittedAt: Date | null
    expireAt: Date | null
    score: number | null
    correct: number | null
    incorrect: number | null
    passed: boolean | null
    updatedAt: Date | null
  }

  export type ExamSubmissionCountAggregateOutputType = {
    id: number
    examId: number
    userId: number
    submittedAt: number
    expireAt: number
    score: number
    correct: number
    incorrect: number
    passed: number
    updatedAt: number
    _all: number
  }


  export type ExamSubmissionAvgAggregateInputType = {
    score?: true
    correct?: true
    incorrect?: true
  }

  export type ExamSubmissionSumAggregateInputType = {
    score?: true
    correct?: true
    incorrect?: true
  }

  export type ExamSubmissionMinAggregateInputType = {
    id?: true
    examId?: true
    userId?: true
    submittedAt?: true
    expireAt?: true
    score?: true
    correct?: true
    incorrect?: true
    passed?: true
    updatedAt?: true
  }

  export type ExamSubmissionMaxAggregateInputType = {
    id?: true
    examId?: true
    userId?: true
    submittedAt?: true
    expireAt?: true
    score?: true
    correct?: true
    incorrect?: true
    passed?: true
    updatedAt?: true
  }

  export type ExamSubmissionCountAggregateInputType = {
    id?: true
    examId?: true
    userId?: true
    submittedAt?: true
    expireAt?: true
    score?: true
    correct?: true
    incorrect?: true
    passed?: true
    updatedAt?: true
    _all?: true
  }

  export type ExamSubmissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExamSubmission to aggregate.
     */
    where?: ExamSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExamSubmissions to fetch.
     */
    orderBy?: ExamSubmissionOrderByWithRelationInput | ExamSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExamSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExamSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExamSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExamSubmissions
    **/
    _count?: true | ExamSubmissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExamSubmissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExamSubmissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExamSubmissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExamSubmissionMaxAggregateInputType
  }

  export type GetExamSubmissionAggregateType<T extends ExamSubmissionAggregateArgs> = {
        [P in keyof T & keyof AggregateExamSubmission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExamSubmission[P]>
      : GetScalarType<T[P], AggregateExamSubmission[P]>
  }




  export type ExamSubmissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExamSubmissionWhereInput
    orderBy?: ExamSubmissionOrderByWithAggregationInput | ExamSubmissionOrderByWithAggregationInput[]
    by: ExamSubmissionScalarFieldEnum[] | ExamSubmissionScalarFieldEnum
    having?: ExamSubmissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExamSubmissionCountAggregateInputType | true
    _avg?: ExamSubmissionAvgAggregateInputType
    _sum?: ExamSubmissionSumAggregateInputType
    _min?: ExamSubmissionMinAggregateInputType
    _max?: ExamSubmissionMaxAggregateInputType
  }

  export type ExamSubmissionGroupByOutputType = {
    id: string
    examId: string
    userId: string
    submittedAt: Date
    expireAt: Date
    score: number | null
    correct: number | null
    incorrect: number | null
    passed: boolean | null
    updatedAt: Date
    _count: ExamSubmissionCountAggregateOutputType | null
    _avg: ExamSubmissionAvgAggregateOutputType | null
    _sum: ExamSubmissionSumAggregateOutputType | null
    _min: ExamSubmissionMinAggregateOutputType | null
    _max: ExamSubmissionMaxAggregateOutputType | null
  }

  type GetExamSubmissionGroupByPayload<T extends ExamSubmissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExamSubmissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExamSubmissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExamSubmissionGroupByOutputType[P]>
            : GetScalarType<T[P], ExamSubmissionGroupByOutputType[P]>
        }
      >
    >


  export type ExamSubmissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    examId?: boolean
    userId?: boolean
    submittedAt?: boolean
    expireAt?: boolean
    score?: boolean
    correct?: boolean
    incorrect?: boolean
    passed?: boolean
    updatedAt?: boolean
    exam?: boolean | ExamDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    answers?: boolean | ExamSubmission$answersArgs<ExtArgs>
    _count?: boolean | ExamSubmissionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["examSubmission"]>

  export type ExamSubmissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    examId?: boolean
    userId?: boolean
    submittedAt?: boolean
    expireAt?: boolean
    score?: boolean
    correct?: boolean
    incorrect?: boolean
    passed?: boolean
    updatedAt?: boolean
    exam?: boolean | ExamDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["examSubmission"]>

  export type ExamSubmissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    examId?: boolean
    userId?: boolean
    submittedAt?: boolean
    expireAt?: boolean
    score?: boolean
    correct?: boolean
    incorrect?: boolean
    passed?: boolean
    updatedAt?: boolean
    exam?: boolean | ExamDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["examSubmission"]>

  export type ExamSubmissionSelectScalar = {
    id?: boolean
    examId?: boolean
    userId?: boolean
    submittedAt?: boolean
    expireAt?: boolean
    score?: boolean
    correct?: boolean
    incorrect?: boolean
    passed?: boolean
    updatedAt?: boolean
  }

  export type ExamSubmissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "examId" | "userId" | "submittedAt" | "expireAt" | "score" | "correct" | "incorrect" | "passed" | "updatedAt", ExtArgs["result"]["examSubmission"]>
  export type ExamSubmissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exam?: boolean | ExamDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    answers?: boolean | ExamSubmission$answersArgs<ExtArgs>
    _count?: boolean | ExamSubmissionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ExamSubmissionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exam?: boolean | ExamDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ExamSubmissionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exam?: boolean | ExamDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ExamSubmissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExamSubmission"
    objects: {
      exam: Prisma.$ExamPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      answers: Prisma.$SubmissionAnswerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      examId: string
      userId: string
      submittedAt: Date
      expireAt: Date
      score: number | null
      correct: number | null
      incorrect: number | null
      passed: boolean | null
      updatedAt: Date
    }, ExtArgs["result"]["examSubmission"]>
    composites: {}
  }

  type ExamSubmissionGetPayload<S extends boolean | null | undefined | ExamSubmissionDefaultArgs> = $Result.GetResult<Prisma.$ExamSubmissionPayload, S>

  type ExamSubmissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExamSubmissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExamSubmissionCountAggregateInputType | true
    }

  export interface ExamSubmissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExamSubmission'], meta: { name: 'ExamSubmission' } }
    /**
     * Find zero or one ExamSubmission that matches the filter.
     * @param {ExamSubmissionFindUniqueArgs} args - Arguments to find a ExamSubmission
     * @example
     * // Get one ExamSubmission
     * const examSubmission = await prisma.examSubmission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExamSubmissionFindUniqueArgs>(args: SelectSubset<T, ExamSubmissionFindUniqueArgs<ExtArgs>>): Prisma__ExamSubmissionClient<$Result.GetResult<Prisma.$ExamSubmissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ExamSubmission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExamSubmissionFindUniqueOrThrowArgs} args - Arguments to find a ExamSubmission
     * @example
     * // Get one ExamSubmission
     * const examSubmission = await prisma.examSubmission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExamSubmissionFindUniqueOrThrowArgs>(args: SelectSubset<T, ExamSubmissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExamSubmissionClient<$Result.GetResult<Prisma.$ExamSubmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExamSubmission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamSubmissionFindFirstArgs} args - Arguments to find a ExamSubmission
     * @example
     * // Get one ExamSubmission
     * const examSubmission = await prisma.examSubmission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExamSubmissionFindFirstArgs>(args?: SelectSubset<T, ExamSubmissionFindFirstArgs<ExtArgs>>): Prisma__ExamSubmissionClient<$Result.GetResult<Prisma.$ExamSubmissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExamSubmission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamSubmissionFindFirstOrThrowArgs} args - Arguments to find a ExamSubmission
     * @example
     * // Get one ExamSubmission
     * const examSubmission = await prisma.examSubmission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExamSubmissionFindFirstOrThrowArgs>(args?: SelectSubset<T, ExamSubmissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExamSubmissionClient<$Result.GetResult<Prisma.$ExamSubmissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ExamSubmissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamSubmissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExamSubmissions
     * const examSubmissions = await prisma.examSubmission.findMany()
     * 
     * // Get first 10 ExamSubmissions
     * const examSubmissions = await prisma.examSubmission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const examSubmissionWithIdOnly = await prisma.examSubmission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExamSubmissionFindManyArgs>(args?: SelectSubset<T, ExamSubmissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamSubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ExamSubmission.
     * @param {ExamSubmissionCreateArgs} args - Arguments to create a ExamSubmission.
     * @example
     * // Create one ExamSubmission
     * const ExamSubmission = await prisma.examSubmission.create({
     *   data: {
     *     // ... data to create a ExamSubmission
     *   }
     * })
     * 
     */
    create<T extends ExamSubmissionCreateArgs>(args: SelectSubset<T, ExamSubmissionCreateArgs<ExtArgs>>): Prisma__ExamSubmissionClient<$Result.GetResult<Prisma.$ExamSubmissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ExamSubmissions.
     * @param {ExamSubmissionCreateManyArgs} args - Arguments to create many ExamSubmissions.
     * @example
     * // Create many ExamSubmissions
     * const examSubmission = await prisma.examSubmission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExamSubmissionCreateManyArgs>(args?: SelectSubset<T, ExamSubmissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ExamSubmissions and returns the data saved in the database.
     * @param {ExamSubmissionCreateManyAndReturnArgs} args - Arguments to create many ExamSubmissions.
     * @example
     * // Create many ExamSubmissions
     * const examSubmission = await prisma.examSubmission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ExamSubmissions and only return the `id`
     * const examSubmissionWithIdOnly = await prisma.examSubmission.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExamSubmissionCreateManyAndReturnArgs>(args?: SelectSubset<T, ExamSubmissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamSubmissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ExamSubmission.
     * @param {ExamSubmissionDeleteArgs} args - Arguments to delete one ExamSubmission.
     * @example
     * // Delete one ExamSubmission
     * const ExamSubmission = await prisma.examSubmission.delete({
     *   where: {
     *     // ... filter to delete one ExamSubmission
     *   }
     * })
     * 
     */
    delete<T extends ExamSubmissionDeleteArgs>(args: SelectSubset<T, ExamSubmissionDeleteArgs<ExtArgs>>): Prisma__ExamSubmissionClient<$Result.GetResult<Prisma.$ExamSubmissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ExamSubmission.
     * @param {ExamSubmissionUpdateArgs} args - Arguments to update one ExamSubmission.
     * @example
     * // Update one ExamSubmission
     * const examSubmission = await prisma.examSubmission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExamSubmissionUpdateArgs>(args: SelectSubset<T, ExamSubmissionUpdateArgs<ExtArgs>>): Prisma__ExamSubmissionClient<$Result.GetResult<Prisma.$ExamSubmissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ExamSubmissions.
     * @param {ExamSubmissionDeleteManyArgs} args - Arguments to filter ExamSubmissions to delete.
     * @example
     * // Delete a few ExamSubmissions
     * const { count } = await prisma.examSubmission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExamSubmissionDeleteManyArgs>(args?: SelectSubset<T, ExamSubmissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExamSubmissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamSubmissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExamSubmissions
     * const examSubmission = await prisma.examSubmission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExamSubmissionUpdateManyArgs>(args: SelectSubset<T, ExamSubmissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExamSubmissions and returns the data updated in the database.
     * @param {ExamSubmissionUpdateManyAndReturnArgs} args - Arguments to update many ExamSubmissions.
     * @example
     * // Update many ExamSubmissions
     * const examSubmission = await prisma.examSubmission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ExamSubmissions and only return the `id`
     * const examSubmissionWithIdOnly = await prisma.examSubmission.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ExamSubmissionUpdateManyAndReturnArgs>(args: SelectSubset<T, ExamSubmissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamSubmissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ExamSubmission.
     * @param {ExamSubmissionUpsertArgs} args - Arguments to update or create a ExamSubmission.
     * @example
     * // Update or create a ExamSubmission
     * const examSubmission = await prisma.examSubmission.upsert({
     *   create: {
     *     // ... data to create a ExamSubmission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExamSubmission we want to update
     *   }
     * })
     */
    upsert<T extends ExamSubmissionUpsertArgs>(args: SelectSubset<T, ExamSubmissionUpsertArgs<ExtArgs>>): Prisma__ExamSubmissionClient<$Result.GetResult<Prisma.$ExamSubmissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ExamSubmissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamSubmissionCountArgs} args - Arguments to filter ExamSubmissions to count.
     * @example
     * // Count the number of ExamSubmissions
     * const count = await prisma.examSubmission.count({
     *   where: {
     *     // ... the filter for the ExamSubmissions we want to count
     *   }
     * })
    **/
    count<T extends ExamSubmissionCountArgs>(
      args?: Subset<T, ExamSubmissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExamSubmissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExamSubmission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamSubmissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExamSubmissionAggregateArgs>(args: Subset<T, ExamSubmissionAggregateArgs>): Prisma.PrismaPromise<GetExamSubmissionAggregateType<T>>

    /**
     * Group by ExamSubmission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamSubmissionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExamSubmissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExamSubmissionGroupByArgs['orderBy'] }
        : { orderBy?: ExamSubmissionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExamSubmissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExamSubmissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExamSubmission model
   */
  readonly fields: ExamSubmissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExamSubmission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExamSubmissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    exam<T extends ExamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExamDefaultArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    answers<T extends ExamSubmission$answersArgs<ExtArgs> = {}>(args?: Subset<T, ExamSubmission$answersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionAnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ExamSubmission model
   */
  interface ExamSubmissionFieldRefs {
    readonly id: FieldRef<"ExamSubmission", 'String'>
    readonly examId: FieldRef<"ExamSubmission", 'String'>
    readonly userId: FieldRef<"ExamSubmission", 'String'>
    readonly submittedAt: FieldRef<"ExamSubmission", 'DateTime'>
    readonly expireAt: FieldRef<"ExamSubmission", 'DateTime'>
    readonly score: FieldRef<"ExamSubmission", 'Int'>
    readonly correct: FieldRef<"ExamSubmission", 'Int'>
    readonly incorrect: FieldRef<"ExamSubmission", 'Int'>
    readonly passed: FieldRef<"ExamSubmission", 'Boolean'>
    readonly updatedAt: FieldRef<"ExamSubmission", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ExamSubmission findUnique
   */
  export type ExamSubmissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamSubmission
     */
    select?: ExamSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamSubmission
     */
    omit?: ExamSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamSubmissionInclude<ExtArgs> | null
    /**
     * Filter, which ExamSubmission to fetch.
     */
    where: ExamSubmissionWhereUniqueInput
  }

  /**
   * ExamSubmission findUniqueOrThrow
   */
  export type ExamSubmissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamSubmission
     */
    select?: ExamSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamSubmission
     */
    omit?: ExamSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamSubmissionInclude<ExtArgs> | null
    /**
     * Filter, which ExamSubmission to fetch.
     */
    where: ExamSubmissionWhereUniqueInput
  }

  /**
   * ExamSubmission findFirst
   */
  export type ExamSubmissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamSubmission
     */
    select?: ExamSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamSubmission
     */
    omit?: ExamSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamSubmissionInclude<ExtArgs> | null
    /**
     * Filter, which ExamSubmission to fetch.
     */
    where?: ExamSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExamSubmissions to fetch.
     */
    orderBy?: ExamSubmissionOrderByWithRelationInput | ExamSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExamSubmissions.
     */
    cursor?: ExamSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExamSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExamSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExamSubmissions.
     */
    distinct?: ExamSubmissionScalarFieldEnum | ExamSubmissionScalarFieldEnum[]
  }

  /**
   * ExamSubmission findFirstOrThrow
   */
  export type ExamSubmissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamSubmission
     */
    select?: ExamSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamSubmission
     */
    omit?: ExamSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamSubmissionInclude<ExtArgs> | null
    /**
     * Filter, which ExamSubmission to fetch.
     */
    where?: ExamSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExamSubmissions to fetch.
     */
    orderBy?: ExamSubmissionOrderByWithRelationInput | ExamSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExamSubmissions.
     */
    cursor?: ExamSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExamSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExamSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExamSubmissions.
     */
    distinct?: ExamSubmissionScalarFieldEnum | ExamSubmissionScalarFieldEnum[]
  }

  /**
   * ExamSubmission findMany
   */
  export type ExamSubmissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamSubmission
     */
    select?: ExamSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamSubmission
     */
    omit?: ExamSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamSubmissionInclude<ExtArgs> | null
    /**
     * Filter, which ExamSubmissions to fetch.
     */
    where?: ExamSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExamSubmissions to fetch.
     */
    orderBy?: ExamSubmissionOrderByWithRelationInput | ExamSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExamSubmissions.
     */
    cursor?: ExamSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExamSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExamSubmissions.
     */
    skip?: number
    distinct?: ExamSubmissionScalarFieldEnum | ExamSubmissionScalarFieldEnum[]
  }

  /**
   * ExamSubmission create
   */
  export type ExamSubmissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamSubmission
     */
    select?: ExamSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamSubmission
     */
    omit?: ExamSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamSubmissionInclude<ExtArgs> | null
    /**
     * The data needed to create a ExamSubmission.
     */
    data: XOR<ExamSubmissionCreateInput, ExamSubmissionUncheckedCreateInput>
  }

  /**
   * ExamSubmission createMany
   */
  export type ExamSubmissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExamSubmissions.
     */
    data: ExamSubmissionCreateManyInput | ExamSubmissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ExamSubmission createManyAndReturn
   */
  export type ExamSubmissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamSubmission
     */
    select?: ExamSubmissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExamSubmission
     */
    omit?: ExamSubmissionOmit<ExtArgs> | null
    /**
     * The data used to create many ExamSubmissions.
     */
    data: ExamSubmissionCreateManyInput | ExamSubmissionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamSubmissionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExamSubmission update
   */
  export type ExamSubmissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamSubmission
     */
    select?: ExamSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamSubmission
     */
    omit?: ExamSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamSubmissionInclude<ExtArgs> | null
    /**
     * The data needed to update a ExamSubmission.
     */
    data: XOR<ExamSubmissionUpdateInput, ExamSubmissionUncheckedUpdateInput>
    /**
     * Choose, which ExamSubmission to update.
     */
    where: ExamSubmissionWhereUniqueInput
  }

  /**
   * ExamSubmission updateMany
   */
  export type ExamSubmissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExamSubmissions.
     */
    data: XOR<ExamSubmissionUpdateManyMutationInput, ExamSubmissionUncheckedUpdateManyInput>
    /**
     * Filter which ExamSubmissions to update
     */
    where?: ExamSubmissionWhereInput
    /**
     * Limit how many ExamSubmissions to update.
     */
    limit?: number
  }

  /**
   * ExamSubmission updateManyAndReturn
   */
  export type ExamSubmissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamSubmission
     */
    select?: ExamSubmissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExamSubmission
     */
    omit?: ExamSubmissionOmit<ExtArgs> | null
    /**
     * The data used to update ExamSubmissions.
     */
    data: XOR<ExamSubmissionUpdateManyMutationInput, ExamSubmissionUncheckedUpdateManyInput>
    /**
     * Filter which ExamSubmissions to update
     */
    where?: ExamSubmissionWhereInput
    /**
     * Limit how many ExamSubmissions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamSubmissionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExamSubmission upsert
   */
  export type ExamSubmissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamSubmission
     */
    select?: ExamSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamSubmission
     */
    omit?: ExamSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamSubmissionInclude<ExtArgs> | null
    /**
     * The filter to search for the ExamSubmission to update in case it exists.
     */
    where: ExamSubmissionWhereUniqueInput
    /**
     * In case the ExamSubmission found by the `where` argument doesn't exist, create a new ExamSubmission with this data.
     */
    create: XOR<ExamSubmissionCreateInput, ExamSubmissionUncheckedCreateInput>
    /**
     * In case the ExamSubmission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExamSubmissionUpdateInput, ExamSubmissionUncheckedUpdateInput>
  }

  /**
   * ExamSubmission delete
   */
  export type ExamSubmissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamSubmission
     */
    select?: ExamSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamSubmission
     */
    omit?: ExamSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamSubmissionInclude<ExtArgs> | null
    /**
     * Filter which ExamSubmission to delete.
     */
    where: ExamSubmissionWhereUniqueInput
  }

  /**
   * ExamSubmission deleteMany
   */
  export type ExamSubmissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExamSubmissions to delete
     */
    where?: ExamSubmissionWhereInput
    /**
     * Limit how many ExamSubmissions to delete.
     */
    limit?: number
  }

  /**
   * ExamSubmission.answers
   */
  export type ExamSubmission$answersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubmissionAnswer
     */
    select?: SubmissionAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubmissionAnswer
     */
    omit?: SubmissionAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionAnswerInclude<ExtArgs> | null
    where?: SubmissionAnswerWhereInput
    orderBy?: SubmissionAnswerOrderByWithRelationInput | SubmissionAnswerOrderByWithRelationInput[]
    cursor?: SubmissionAnswerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubmissionAnswerScalarFieldEnum | SubmissionAnswerScalarFieldEnum[]
  }

  /**
   * ExamSubmission without action
   */
  export type ExamSubmissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamSubmission
     */
    select?: ExamSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamSubmission
     */
    omit?: ExamSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamSubmissionInclude<ExtArgs> | null
  }


  /**
   * Model SubmissionAnswer
   */

  export type AggregateSubmissionAnswer = {
    _count: SubmissionAnswerCountAggregateOutputType | null
    _min: SubmissionAnswerMinAggregateOutputType | null
    _max: SubmissionAnswerMaxAggregateOutputType | null
  }

  export type SubmissionAnswerMinAggregateOutputType = {
    id: string | null
    submissionId: string | null
    questionId: string | null
    selectedAnswerIds: string | null
  }

  export type SubmissionAnswerMaxAggregateOutputType = {
    id: string | null
    submissionId: string | null
    questionId: string | null
    selectedAnswerIds: string | null
  }

  export type SubmissionAnswerCountAggregateOutputType = {
    id: number
    submissionId: number
    questionId: number
    selectedAnswerIds: number
    _all: number
  }


  export type SubmissionAnswerMinAggregateInputType = {
    id?: true
    submissionId?: true
    questionId?: true
    selectedAnswerIds?: true
  }

  export type SubmissionAnswerMaxAggregateInputType = {
    id?: true
    submissionId?: true
    questionId?: true
    selectedAnswerIds?: true
  }

  export type SubmissionAnswerCountAggregateInputType = {
    id?: true
    submissionId?: true
    questionId?: true
    selectedAnswerIds?: true
    _all?: true
  }

  export type SubmissionAnswerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubmissionAnswer to aggregate.
     */
    where?: SubmissionAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubmissionAnswers to fetch.
     */
    orderBy?: SubmissionAnswerOrderByWithRelationInput | SubmissionAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubmissionAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubmissionAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubmissionAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SubmissionAnswers
    **/
    _count?: true | SubmissionAnswerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubmissionAnswerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubmissionAnswerMaxAggregateInputType
  }

  export type GetSubmissionAnswerAggregateType<T extends SubmissionAnswerAggregateArgs> = {
        [P in keyof T & keyof AggregateSubmissionAnswer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubmissionAnswer[P]>
      : GetScalarType<T[P], AggregateSubmissionAnswer[P]>
  }




  export type SubmissionAnswerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubmissionAnswerWhereInput
    orderBy?: SubmissionAnswerOrderByWithAggregationInput | SubmissionAnswerOrderByWithAggregationInput[]
    by: SubmissionAnswerScalarFieldEnum[] | SubmissionAnswerScalarFieldEnum
    having?: SubmissionAnswerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubmissionAnswerCountAggregateInputType | true
    _min?: SubmissionAnswerMinAggregateInputType
    _max?: SubmissionAnswerMaxAggregateInputType
  }

  export type SubmissionAnswerGroupByOutputType = {
    id: string
    submissionId: string
    questionId: string
    selectedAnswerIds: string
    _count: SubmissionAnswerCountAggregateOutputType | null
    _min: SubmissionAnswerMinAggregateOutputType | null
    _max: SubmissionAnswerMaxAggregateOutputType | null
  }

  type GetSubmissionAnswerGroupByPayload<T extends SubmissionAnswerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubmissionAnswerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubmissionAnswerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubmissionAnswerGroupByOutputType[P]>
            : GetScalarType<T[P], SubmissionAnswerGroupByOutputType[P]>
        }
      >
    >


  export type SubmissionAnswerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    submissionId?: boolean
    questionId?: boolean
    selectedAnswerIds?: boolean
    submission?: boolean | ExamSubmissionDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["submissionAnswer"]>

  export type SubmissionAnswerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    submissionId?: boolean
    questionId?: boolean
    selectedAnswerIds?: boolean
    submission?: boolean | ExamSubmissionDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["submissionAnswer"]>

  export type SubmissionAnswerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    submissionId?: boolean
    questionId?: boolean
    selectedAnswerIds?: boolean
    submission?: boolean | ExamSubmissionDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["submissionAnswer"]>

  export type SubmissionAnswerSelectScalar = {
    id?: boolean
    submissionId?: boolean
    questionId?: boolean
    selectedAnswerIds?: boolean
  }

  export type SubmissionAnswerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "submissionId" | "questionId" | "selectedAnswerIds", ExtArgs["result"]["submissionAnswer"]>
  export type SubmissionAnswerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submission?: boolean | ExamSubmissionDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }
  export type SubmissionAnswerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submission?: boolean | ExamSubmissionDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }
  export type SubmissionAnswerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submission?: boolean | ExamSubmissionDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }

  export type $SubmissionAnswerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SubmissionAnswer"
    objects: {
      submission: Prisma.$ExamSubmissionPayload<ExtArgs>
      question: Prisma.$QuestionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      submissionId: string
      questionId: string
      selectedAnswerIds: string
    }, ExtArgs["result"]["submissionAnswer"]>
    composites: {}
  }

  type SubmissionAnswerGetPayload<S extends boolean | null | undefined | SubmissionAnswerDefaultArgs> = $Result.GetResult<Prisma.$SubmissionAnswerPayload, S>

  type SubmissionAnswerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubmissionAnswerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubmissionAnswerCountAggregateInputType | true
    }

  export interface SubmissionAnswerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SubmissionAnswer'], meta: { name: 'SubmissionAnswer' } }
    /**
     * Find zero or one SubmissionAnswer that matches the filter.
     * @param {SubmissionAnswerFindUniqueArgs} args - Arguments to find a SubmissionAnswer
     * @example
     * // Get one SubmissionAnswer
     * const submissionAnswer = await prisma.submissionAnswer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubmissionAnswerFindUniqueArgs>(args: SelectSubset<T, SubmissionAnswerFindUniqueArgs<ExtArgs>>): Prisma__SubmissionAnswerClient<$Result.GetResult<Prisma.$SubmissionAnswerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SubmissionAnswer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubmissionAnswerFindUniqueOrThrowArgs} args - Arguments to find a SubmissionAnswer
     * @example
     * // Get one SubmissionAnswer
     * const submissionAnswer = await prisma.submissionAnswer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubmissionAnswerFindUniqueOrThrowArgs>(args: SelectSubset<T, SubmissionAnswerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubmissionAnswerClient<$Result.GetResult<Prisma.$SubmissionAnswerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubmissionAnswer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionAnswerFindFirstArgs} args - Arguments to find a SubmissionAnswer
     * @example
     * // Get one SubmissionAnswer
     * const submissionAnswer = await prisma.submissionAnswer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubmissionAnswerFindFirstArgs>(args?: SelectSubset<T, SubmissionAnswerFindFirstArgs<ExtArgs>>): Prisma__SubmissionAnswerClient<$Result.GetResult<Prisma.$SubmissionAnswerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubmissionAnswer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionAnswerFindFirstOrThrowArgs} args - Arguments to find a SubmissionAnswer
     * @example
     * // Get one SubmissionAnswer
     * const submissionAnswer = await prisma.submissionAnswer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubmissionAnswerFindFirstOrThrowArgs>(args?: SelectSubset<T, SubmissionAnswerFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubmissionAnswerClient<$Result.GetResult<Prisma.$SubmissionAnswerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SubmissionAnswers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionAnswerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SubmissionAnswers
     * const submissionAnswers = await prisma.submissionAnswer.findMany()
     * 
     * // Get first 10 SubmissionAnswers
     * const submissionAnswers = await prisma.submissionAnswer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const submissionAnswerWithIdOnly = await prisma.submissionAnswer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubmissionAnswerFindManyArgs>(args?: SelectSubset<T, SubmissionAnswerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionAnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SubmissionAnswer.
     * @param {SubmissionAnswerCreateArgs} args - Arguments to create a SubmissionAnswer.
     * @example
     * // Create one SubmissionAnswer
     * const SubmissionAnswer = await prisma.submissionAnswer.create({
     *   data: {
     *     // ... data to create a SubmissionAnswer
     *   }
     * })
     * 
     */
    create<T extends SubmissionAnswerCreateArgs>(args: SelectSubset<T, SubmissionAnswerCreateArgs<ExtArgs>>): Prisma__SubmissionAnswerClient<$Result.GetResult<Prisma.$SubmissionAnswerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SubmissionAnswers.
     * @param {SubmissionAnswerCreateManyArgs} args - Arguments to create many SubmissionAnswers.
     * @example
     * // Create many SubmissionAnswers
     * const submissionAnswer = await prisma.submissionAnswer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubmissionAnswerCreateManyArgs>(args?: SelectSubset<T, SubmissionAnswerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SubmissionAnswers and returns the data saved in the database.
     * @param {SubmissionAnswerCreateManyAndReturnArgs} args - Arguments to create many SubmissionAnswers.
     * @example
     * // Create many SubmissionAnswers
     * const submissionAnswer = await prisma.submissionAnswer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SubmissionAnswers and only return the `id`
     * const submissionAnswerWithIdOnly = await prisma.submissionAnswer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubmissionAnswerCreateManyAndReturnArgs>(args?: SelectSubset<T, SubmissionAnswerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionAnswerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SubmissionAnswer.
     * @param {SubmissionAnswerDeleteArgs} args - Arguments to delete one SubmissionAnswer.
     * @example
     * // Delete one SubmissionAnswer
     * const SubmissionAnswer = await prisma.submissionAnswer.delete({
     *   where: {
     *     // ... filter to delete one SubmissionAnswer
     *   }
     * })
     * 
     */
    delete<T extends SubmissionAnswerDeleteArgs>(args: SelectSubset<T, SubmissionAnswerDeleteArgs<ExtArgs>>): Prisma__SubmissionAnswerClient<$Result.GetResult<Prisma.$SubmissionAnswerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SubmissionAnswer.
     * @param {SubmissionAnswerUpdateArgs} args - Arguments to update one SubmissionAnswer.
     * @example
     * // Update one SubmissionAnswer
     * const submissionAnswer = await prisma.submissionAnswer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubmissionAnswerUpdateArgs>(args: SelectSubset<T, SubmissionAnswerUpdateArgs<ExtArgs>>): Prisma__SubmissionAnswerClient<$Result.GetResult<Prisma.$SubmissionAnswerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SubmissionAnswers.
     * @param {SubmissionAnswerDeleteManyArgs} args - Arguments to filter SubmissionAnswers to delete.
     * @example
     * // Delete a few SubmissionAnswers
     * const { count } = await prisma.submissionAnswer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubmissionAnswerDeleteManyArgs>(args?: SelectSubset<T, SubmissionAnswerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubmissionAnswers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionAnswerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SubmissionAnswers
     * const submissionAnswer = await prisma.submissionAnswer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubmissionAnswerUpdateManyArgs>(args: SelectSubset<T, SubmissionAnswerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubmissionAnswers and returns the data updated in the database.
     * @param {SubmissionAnswerUpdateManyAndReturnArgs} args - Arguments to update many SubmissionAnswers.
     * @example
     * // Update many SubmissionAnswers
     * const submissionAnswer = await prisma.submissionAnswer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SubmissionAnswers and only return the `id`
     * const submissionAnswerWithIdOnly = await prisma.submissionAnswer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SubmissionAnswerUpdateManyAndReturnArgs>(args: SelectSubset<T, SubmissionAnswerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionAnswerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SubmissionAnswer.
     * @param {SubmissionAnswerUpsertArgs} args - Arguments to update or create a SubmissionAnswer.
     * @example
     * // Update or create a SubmissionAnswer
     * const submissionAnswer = await prisma.submissionAnswer.upsert({
     *   create: {
     *     // ... data to create a SubmissionAnswer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SubmissionAnswer we want to update
     *   }
     * })
     */
    upsert<T extends SubmissionAnswerUpsertArgs>(args: SelectSubset<T, SubmissionAnswerUpsertArgs<ExtArgs>>): Prisma__SubmissionAnswerClient<$Result.GetResult<Prisma.$SubmissionAnswerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SubmissionAnswers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionAnswerCountArgs} args - Arguments to filter SubmissionAnswers to count.
     * @example
     * // Count the number of SubmissionAnswers
     * const count = await prisma.submissionAnswer.count({
     *   where: {
     *     // ... the filter for the SubmissionAnswers we want to count
     *   }
     * })
    **/
    count<T extends SubmissionAnswerCountArgs>(
      args?: Subset<T, SubmissionAnswerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubmissionAnswerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SubmissionAnswer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionAnswerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubmissionAnswerAggregateArgs>(args: Subset<T, SubmissionAnswerAggregateArgs>): Prisma.PrismaPromise<GetSubmissionAnswerAggregateType<T>>

    /**
     * Group by SubmissionAnswer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionAnswerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SubmissionAnswerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubmissionAnswerGroupByArgs['orderBy'] }
        : { orderBy?: SubmissionAnswerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubmissionAnswerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubmissionAnswerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SubmissionAnswer model
   */
  readonly fields: SubmissionAnswerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SubmissionAnswer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubmissionAnswerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    submission<T extends ExamSubmissionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExamSubmissionDefaultArgs<ExtArgs>>): Prisma__ExamSubmissionClient<$Result.GetResult<Prisma.$ExamSubmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    question<T extends QuestionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestionDefaultArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SubmissionAnswer model
   */
  interface SubmissionAnswerFieldRefs {
    readonly id: FieldRef<"SubmissionAnswer", 'String'>
    readonly submissionId: FieldRef<"SubmissionAnswer", 'String'>
    readonly questionId: FieldRef<"SubmissionAnswer", 'String'>
    readonly selectedAnswerIds: FieldRef<"SubmissionAnswer", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SubmissionAnswer findUnique
   */
  export type SubmissionAnswerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubmissionAnswer
     */
    select?: SubmissionAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubmissionAnswer
     */
    omit?: SubmissionAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionAnswerInclude<ExtArgs> | null
    /**
     * Filter, which SubmissionAnswer to fetch.
     */
    where: SubmissionAnswerWhereUniqueInput
  }

  /**
   * SubmissionAnswer findUniqueOrThrow
   */
  export type SubmissionAnswerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubmissionAnswer
     */
    select?: SubmissionAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubmissionAnswer
     */
    omit?: SubmissionAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionAnswerInclude<ExtArgs> | null
    /**
     * Filter, which SubmissionAnswer to fetch.
     */
    where: SubmissionAnswerWhereUniqueInput
  }

  /**
   * SubmissionAnswer findFirst
   */
  export type SubmissionAnswerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubmissionAnswer
     */
    select?: SubmissionAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubmissionAnswer
     */
    omit?: SubmissionAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionAnswerInclude<ExtArgs> | null
    /**
     * Filter, which SubmissionAnswer to fetch.
     */
    where?: SubmissionAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubmissionAnswers to fetch.
     */
    orderBy?: SubmissionAnswerOrderByWithRelationInput | SubmissionAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubmissionAnswers.
     */
    cursor?: SubmissionAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubmissionAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubmissionAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubmissionAnswers.
     */
    distinct?: SubmissionAnswerScalarFieldEnum | SubmissionAnswerScalarFieldEnum[]
  }

  /**
   * SubmissionAnswer findFirstOrThrow
   */
  export type SubmissionAnswerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubmissionAnswer
     */
    select?: SubmissionAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubmissionAnswer
     */
    omit?: SubmissionAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionAnswerInclude<ExtArgs> | null
    /**
     * Filter, which SubmissionAnswer to fetch.
     */
    where?: SubmissionAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubmissionAnswers to fetch.
     */
    orderBy?: SubmissionAnswerOrderByWithRelationInput | SubmissionAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubmissionAnswers.
     */
    cursor?: SubmissionAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubmissionAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubmissionAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubmissionAnswers.
     */
    distinct?: SubmissionAnswerScalarFieldEnum | SubmissionAnswerScalarFieldEnum[]
  }

  /**
   * SubmissionAnswer findMany
   */
  export type SubmissionAnswerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubmissionAnswer
     */
    select?: SubmissionAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubmissionAnswer
     */
    omit?: SubmissionAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionAnswerInclude<ExtArgs> | null
    /**
     * Filter, which SubmissionAnswers to fetch.
     */
    where?: SubmissionAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubmissionAnswers to fetch.
     */
    orderBy?: SubmissionAnswerOrderByWithRelationInput | SubmissionAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SubmissionAnswers.
     */
    cursor?: SubmissionAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubmissionAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubmissionAnswers.
     */
    skip?: number
    distinct?: SubmissionAnswerScalarFieldEnum | SubmissionAnswerScalarFieldEnum[]
  }

  /**
   * SubmissionAnswer create
   */
  export type SubmissionAnswerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubmissionAnswer
     */
    select?: SubmissionAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubmissionAnswer
     */
    omit?: SubmissionAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionAnswerInclude<ExtArgs> | null
    /**
     * The data needed to create a SubmissionAnswer.
     */
    data: XOR<SubmissionAnswerCreateInput, SubmissionAnswerUncheckedCreateInput>
  }

  /**
   * SubmissionAnswer createMany
   */
  export type SubmissionAnswerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SubmissionAnswers.
     */
    data: SubmissionAnswerCreateManyInput | SubmissionAnswerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SubmissionAnswer createManyAndReturn
   */
  export type SubmissionAnswerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubmissionAnswer
     */
    select?: SubmissionAnswerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SubmissionAnswer
     */
    omit?: SubmissionAnswerOmit<ExtArgs> | null
    /**
     * The data used to create many SubmissionAnswers.
     */
    data: SubmissionAnswerCreateManyInput | SubmissionAnswerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionAnswerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SubmissionAnswer update
   */
  export type SubmissionAnswerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubmissionAnswer
     */
    select?: SubmissionAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubmissionAnswer
     */
    omit?: SubmissionAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionAnswerInclude<ExtArgs> | null
    /**
     * The data needed to update a SubmissionAnswer.
     */
    data: XOR<SubmissionAnswerUpdateInput, SubmissionAnswerUncheckedUpdateInput>
    /**
     * Choose, which SubmissionAnswer to update.
     */
    where: SubmissionAnswerWhereUniqueInput
  }

  /**
   * SubmissionAnswer updateMany
   */
  export type SubmissionAnswerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SubmissionAnswers.
     */
    data: XOR<SubmissionAnswerUpdateManyMutationInput, SubmissionAnswerUncheckedUpdateManyInput>
    /**
     * Filter which SubmissionAnswers to update
     */
    where?: SubmissionAnswerWhereInput
    /**
     * Limit how many SubmissionAnswers to update.
     */
    limit?: number
  }

  /**
   * SubmissionAnswer updateManyAndReturn
   */
  export type SubmissionAnswerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubmissionAnswer
     */
    select?: SubmissionAnswerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SubmissionAnswer
     */
    omit?: SubmissionAnswerOmit<ExtArgs> | null
    /**
     * The data used to update SubmissionAnswers.
     */
    data: XOR<SubmissionAnswerUpdateManyMutationInput, SubmissionAnswerUncheckedUpdateManyInput>
    /**
     * Filter which SubmissionAnswers to update
     */
    where?: SubmissionAnswerWhereInput
    /**
     * Limit how many SubmissionAnswers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionAnswerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SubmissionAnswer upsert
   */
  export type SubmissionAnswerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubmissionAnswer
     */
    select?: SubmissionAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubmissionAnswer
     */
    omit?: SubmissionAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionAnswerInclude<ExtArgs> | null
    /**
     * The filter to search for the SubmissionAnswer to update in case it exists.
     */
    where: SubmissionAnswerWhereUniqueInput
    /**
     * In case the SubmissionAnswer found by the `where` argument doesn't exist, create a new SubmissionAnswer with this data.
     */
    create: XOR<SubmissionAnswerCreateInput, SubmissionAnswerUncheckedCreateInput>
    /**
     * In case the SubmissionAnswer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubmissionAnswerUpdateInput, SubmissionAnswerUncheckedUpdateInput>
  }

  /**
   * SubmissionAnswer delete
   */
  export type SubmissionAnswerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubmissionAnswer
     */
    select?: SubmissionAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubmissionAnswer
     */
    omit?: SubmissionAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionAnswerInclude<ExtArgs> | null
    /**
     * Filter which SubmissionAnswer to delete.
     */
    where: SubmissionAnswerWhereUniqueInput
  }

  /**
   * SubmissionAnswer deleteMany
   */
  export type SubmissionAnswerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubmissionAnswers to delete
     */
    where?: SubmissionAnswerWhereInput
    /**
     * Limit how many SubmissionAnswers to delete.
     */
    limit?: number
  }

  /**
   * SubmissionAnswer without action
   */
  export type SubmissionAnswerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubmissionAnswer
     */
    select?: SubmissionAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubmissionAnswer
     */
    omit?: SubmissionAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionAnswerInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    fullName: 'fullName',
    email: 'email',
    purpose: 'purpose',
    institution: 'institution',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ExamScalarFieldEnum: {
    id: 'id',
    title: 'title',
    tags: 'tags',
    category: 'category',
    duration: 'duration',
    minScore: 'minScore',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    publishedAt: 'publishedAt',
    isDeleted: 'isDeleted',
    deletedAt: 'deletedAt',
    authorId: 'authorId'
  };

  export type ExamScalarFieldEnum = (typeof ExamScalarFieldEnum)[keyof typeof ExamScalarFieldEnum]


  export const QuestionScalarFieldEnum: {
    id: 'id',
    title: 'title',
    image: 'image',
    imageLabel: 'imageLabel',
    type: 'type',
    examId: 'examId',
    createdAt: 'createdAt',
    correctAnswerIndex: 'correctAnswerIndex'
  };

  export type QuestionScalarFieldEnum = (typeof QuestionScalarFieldEnum)[keyof typeof QuestionScalarFieldEnum]


  export const AnswerScalarFieldEnum: {
    id: 'id',
    answerText: 'answerText',
    isCorrect: 'isCorrect',
    questionId: 'questionId'
  };

  export type AnswerScalarFieldEnum = (typeof AnswerScalarFieldEnum)[keyof typeof AnswerScalarFieldEnum]


  export const ExamSubmissionScalarFieldEnum: {
    id: 'id',
    examId: 'examId',
    userId: 'userId',
    submittedAt: 'submittedAt',
    expireAt: 'expireAt',
    score: 'score',
    correct: 'correct',
    incorrect: 'incorrect',
    passed: 'passed',
    updatedAt: 'updatedAt'
  };

  export type ExamSubmissionScalarFieldEnum = (typeof ExamSubmissionScalarFieldEnum)[keyof typeof ExamSubmissionScalarFieldEnum]


  export const SubmissionAnswerScalarFieldEnum: {
    id: 'id',
    submissionId: 'submissionId',
    questionId: 'questionId',
    selectedAnswerIds: 'selectedAnswerIds'
  };

  export type SubmissionAnswerScalarFieldEnum = (typeof SubmissionAnswerScalarFieldEnum)[keyof typeof SubmissionAnswerScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'QuestionType'
   */
  export type EnumQuestionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QuestionType'>
    


  /**
   * Reference to a field of type 'QuestionType[]'
   */
  export type ListEnumQuestionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QuestionType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    fullName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    purpose?: StringFilter<"User"> | string
    institution?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    Exam?: ExamListRelationFilter
    ExamSubmission?: ExamSubmissionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    purpose?: SortOrder
    institution?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Exam?: ExamOrderByRelationAggregateInput
    ExamSubmission?: ExamSubmissionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    fullName?: StringFilter<"User"> | string
    purpose?: StringFilter<"User"> | string
    institution?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    Exam?: ExamListRelationFilter
    ExamSubmission?: ExamSubmissionListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    purpose?: SortOrder
    institution?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    fullName?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    purpose?: StringWithAggregatesFilter<"User"> | string
    institution?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ExamWhereInput = {
    AND?: ExamWhereInput | ExamWhereInput[]
    OR?: ExamWhereInput[]
    NOT?: ExamWhereInput | ExamWhereInput[]
    id?: StringFilter<"Exam"> | string
    title?: StringFilter<"Exam"> | string
    tags?: StringFilter<"Exam"> | string
    category?: StringFilter<"Exam"> | string
    duration?: IntFilter<"Exam"> | number
    minScore?: IntNullableFilter<"Exam"> | number | null
    description?: StringNullableFilter<"Exam"> | string | null
    createdAt?: DateTimeFilter<"Exam"> | Date | string
    updatedAt?: DateTimeFilter<"Exam"> | Date | string
    publishedAt?: DateTimeNullableFilter<"Exam"> | Date | string | null
    isDeleted?: BoolFilter<"Exam"> | boolean
    deletedAt?: DateTimeNullableFilter<"Exam"> | Date | string | null
    authorId?: StringFilter<"Exam"> | string
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    questions?: QuestionListRelationFilter
    ExamSubmission?: ExamSubmissionListRelationFilter
  }

  export type ExamOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    tags?: SortOrder
    category?: SortOrder
    duration?: SortOrder
    minScore?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    publishedAt?: SortOrderInput | SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    authorId?: SortOrder
    author?: UserOrderByWithRelationInput
    questions?: QuestionOrderByRelationAggregateInput
    ExamSubmission?: ExamSubmissionOrderByRelationAggregateInput
  }

  export type ExamWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExamWhereInput | ExamWhereInput[]
    OR?: ExamWhereInput[]
    NOT?: ExamWhereInput | ExamWhereInput[]
    title?: StringFilter<"Exam"> | string
    tags?: StringFilter<"Exam"> | string
    category?: StringFilter<"Exam"> | string
    duration?: IntFilter<"Exam"> | number
    minScore?: IntNullableFilter<"Exam"> | number | null
    description?: StringNullableFilter<"Exam"> | string | null
    createdAt?: DateTimeFilter<"Exam"> | Date | string
    updatedAt?: DateTimeFilter<"Exam"> | Date | string
    publishedAt?: DateTimeNullableFilter<"Exam"> | Date | string | null
    isDeleted?: BoolFilter<"Exam"> | boolean
    deletedAt?: DateTimeNullableFilter<"Exam"> | Date | string | null
    authorId?: StringFilter<"Exam"> | string
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    questions?: QuestionListRelationFilter
    ExamSubmission?: ExamSubmissionListRelationFilter
  }, "id">

  export type ExamOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    tags?: SortOrder
    category?: SortOrder
    duration?: SortOrder
    minScore?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    publishedAt?: SortOrderInput | SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    authorId?: SortOrder
    _count?: ExamCountOrderByAggregateInput
    _avg?: ExamAvgOrderByAggregateInput
    _max?: ExamMaxOrderByAggregateInput
    _min?: ExamMinOrderByAggregateInput
    _sum?: ExamSumOrderByAggregateInput
  }

  export type ExamScalarWhereWithAggregatesInput = {
    AND?: ExamScalarWhereWithAggregatesInput | ExamScalarWhereWithAggregatesInput[]
    OR?: ExamScalarWhereWithAggregatesInput[]
    NOT?: ExamScalarWhereWithAggregatesInput | ExamScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Exam"> | string
    title?: StringWithAggregatesFilter<"Exam"> | string
    tags?: StringWithAggregatesFilter<"Exam"> | string
    category?: StringWithAggregatesFilter<"Exam"> | string
    duration?: IntWithAggregatesFilter<"Exam"> | number
    minScore?: IntNullableWithAggregatesFilter<"Exam"> | number | null
    description?: StringNullableWithAggregatesFilter<"Exam"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Exam"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Exam"> | Date | string
    publishedAt?: DateTimeNullableWithAggregatesFilter<"Exam"> | Date | string | null
    isDeleted?: BoolWithAggregatesFilter<"Exam"> | boolean
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Exam"> | Date | string | null
    authorId?: StringWithAggregatesFilter<"Exam"> | string
  }

  export type QuestionWhereInput = {
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    id?: StringFilter<"Question"> | string
    title?: StringFilter<"Question"> | string
    image?: StringNullableFilter<"Question"> | string | null
    imageLabel?: StringNullableFilter<"Question"> | string | null
    type?: EnumQuestionTypeFilter<"Question"> | $Enums.QuestionType
    examId?: StringFilter<"Question"> | string
    createdAt?: DateTimeFilter<"Question"> | Date | string
    correctAnswerIndex?: IntNullableFilter<"Question"> | number | null
    exam?: XOR<ExamScalarRelationFilter, ExamWhereInput>
    answers?: AnswerListRelationFilter
    SubmissionAnswer?: SubmissionAnswerListRelationFilter
  }

  export type QuestionOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    image?: SortOrderInput | SortOrder
    imageLabel?: SortOrderInput | SortOrder
    type?: SortOrder
    examId?: SortOrder
    createdAt?: SortOrder
    correctAnswerIndex?: SortOrderInput | SortOrder
    exam?: ExamOrderByWithRelationInput
    answers?: AnswerOrderByRelationAggregateInput
    SubmissionAnswer?: SubmissionAnswerOrderByRelationAggregateInput
  }

  export type QuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    title?: StringFilter<"Question"> | string
    image?: StringNullableFilter<"Question"> | string | null
    imageLabel?: StringNullableFilter<"Question"> | string | null
    type?: EnumQuestionTypeFilter<"Question"> | $Enums.QuestionType
    examId?: StringFilter<"Question"> | string
    createdAt?: DateTimeFilter<"Question"> | Date | string
    correctAnswerIndex?: IntNullableFilter<"Question"> | number | null
    exam?: XOR<ExamScalarRelationFilter, ExamWhereInput>
    answers?: AnswerListRelationFilter
    SubmissionAnswer?: SubmissionAnswerListRelationFilter
  }, "id">

  export type QuestionOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    image?: SortOrderInput | SortOrder
    imageLabel?: SortOrderInput | SortOrder
    type?: SortOrder
    examId?: SortOrder
    createdAt?: SortOrder
    correctAnswerIndex?: SortOrderInput | SortOrder
    _count?: QuestionCountOrderByAggregateInput
    _avg?: QuestionAvgOrderByAggregateInput
    _max?: QuestionMaxOrderByAggregateInput
    _min?: QuestionMinOrderByAggregateInput
    _sum?: QuestionSumOrderByAggregateInput
  }

  export type QuestionScalarWhereWithAggregatesInput = {
    AND?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    OR?: QuestionScalarWhereWithAggregatesInput[]
    NOT?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Question"> | string
    title?: StringWithAggregatesFilter<"Question"> | string
    image?: StringNullableWithAggregatesFilter<"Question"> | string | null
    imageLabel?: StringNullableWithAggregatesFilter<"Question"> | string | null
    type?: EnumQuestionTypeWithAggregatesFilter<"Question"> | $Enums.QuestionType
    examId?: StringWithAggregatesFilter<"Question"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Question"> | Date | string
    correctAnswerIndex?: IntNullableWithAggregatesFilter<"Question"> | number | null
  }

  export type AnswerWhereInput = {
    AND?: AnswerWhereInput | AnswerWhereInput[]
    OR?: AnswerWhereInput[]
    NOT?: AnswerWhereInput | AnswerWhereInput[]
    id?: StringFilter<"Answer"> | string
    answerText?: StringFilter<"Answer"> | string
    isCorrect?: BoolFilter<"Answer"> | boolean
    questionId?: StringFilter<"Answer"> | string
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
  }

  export type AnswerOrderByWithRelationInput = {
    id?: SortOrder
    answerText?: SortOrder
    isCorrect?: SortOrder
    questionId?: SortOrder
    question?: QuestionOrderByWithRelationInput
  }

  export type AnswerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AnswerWhereInput | AnswerWhereInput[]
    OR?: AnswerWhereInput[]
    NOT?: AnswerWhereInput | AnswerWhereInput[]
    answerText?: StringFilter<"Answer"> | string
    isCorrect?: BoolFilter<"Answer"> | boolean
    questionId?: StringFilter<"Answer"> | string
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
  }, "id">

  export type AnswerOrderByWithAggregationInput = {
    id?: SortOrder
    answerText?: SortOrder
    isCorrect?: SortOrder
    questionId?: SortOrder
    _count?: AnswerCountOrderByAggregateInput
    _max?: AnswerMaxOrderByAggregateInput
    _min?: AnswerMinOrderByAggregateInput
  }

  export type AnswerScalarWhereWithAggregatesInput = {
    AND?: AnswerScalarWhereWithAggregatesInput | AnswerScalarWhereWithAggregatesInput[]
    OR?: AnswerScalarWhereWithAggregatesInput[]
    NOT?: AnswerScalarWhereWithAggregatesInput | AnswerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Answer"> | string
    answerText?: StringWithAggregatesFilter<"Answer"> | string
    isCorrect?: BoolWithAggregatesFilter<"Answer"> | boolean
    questionId?: StringWithAggregatesFilter<"Answer"> | string
  }

  export type ExamSubmissionWhereInput = {
    AND?: ExamSubmissionWhereInput | ExamSubmissionWhereInput[]
    OR?: ExamSubmissionWhereInput[]
    NOT?: ExamSubmissionWhereInput | ExamSubmissionWhereInput[]
    id?: StringFilter<"ExamSubmission"> | string
    examId?: StringFilter<"ExamSubmission"> | string
    userId?: StringFilter<"ExamSubmission"> | string
    submittedAt?: DateTimeFilter<"ExamSubmission"> | Date | string
    expireAt?: DateTimeFilter<"ExamSubmission"> | Date | string
    score?: IntNullableFilter<"ExamSubmission"> | number | null
    correct?: IntNullableFilter<"ExamSubmission"> | number | null
    incorrect?: IntNullableFilter<"ExamSubmission"> | number | null
    passed?: BoolNullableFilter<"ExamSubmission"> | boolean | null
    updatedAt?: DateTimeFilter<"ExamSubmission"> | Date | string
    exam?: XOR<ExamScalarRelationFilter, ExamWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    answers?: SubmissionAnswerListRelationFilter
  }

  export type ExamSubmissionOrderByWithRelationInput = {
    id?: SortOrder
    examId?: SortOrder
    userId?: SortOrder
    submittedAt?: SortOrder
    expireAt?: SortOrder
    score?: SortOrderInput | SortOrder
    correct?: SortOrderInput | SortOrder
    incorrect?: SortOrderInput | SortOrder
    passed?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    exam?: ExamOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    answers?: SubmissionAnswerOrderByRelationAggregateInput
  }

  export type ExamSubmissionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExamSubmissionWhereInput | ExamSubmissionWhereInput[]
    OR?: ExamSubmissionWhereInput[]
    NOT?: ExamSubmissionWhereInput | ExamSubmissionWhereInput[]
    examId?: StringFilter<"ExamSubmission"> | string
    userId?: StringFilter<"ExamSubmission"> | string
    submittedAt?: DateTimeFilter<"ExamSubmission"> | Date | string
    expireAt?: DateTimeFilter<"ExamSubmission"> | Date | string
    score?: IntNullableFilter<"ExamSubmission"> | number | null
    correct?: IntNullableFilter<"ExamSubmission"> | number | null
    incorrect?: IntNullableFilter<"ExamSubmission"> | number | null
    passed?: BoolNullableFilter<"ExamSubmission"> | boolean | null
    updatedAt?: DateTimeFilter<"ExamSubmission"> | Date | string
    exam?: XOR<ExamScalarRelationFilter, ExamWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    answers?: SubmissionAnswerListRelationFilter
  }, "id">

  export type ExamSubmissionOrderByWithAggregationInput = {
    id?: SortOrder
    examId?: SortOrder
    userId?: SortOrder
    submittedAt?: SortOrder
    expireAt?: SortOrder
    score?: SortOrderInput | SortOrder
    correct?: SortOrderInput | SortOrder
    incorrect?: SortOrderInput | SortOrder
    passed?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    _count?: ExamSubmissionCountOrderByAggregateInput
    _avg?: ExamSubmissionAvgOrderByAggregateInput
    _max?: ExamSubmissionMaxOrderByAggregateInput
    _min?: ExamSubmissionMinOrderByAggregateInput
    _sum?: ExamSubmissionSumOrderByAggregateInput
  }

  export type ExamSubmissionScalarWhereWithAggregatesInput = {
    AND?: ExamSubmissionScalarWhereWithAggregatesInput | ExamSubmissionScalarWhereWithAggregatesInput[]
    OR?: ExamSubmissionScalarWhereWithAggregatesInput[]
    NOT?: ExamSubmissionScalarWhereWithAggregatesInput | ExamSubmissionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ExamSubmission"> | string
    examId?: StringWithAggregatesFilter<"ExamSubmission"> | string
    userId?: StringWithAggregatesFilter<"ExamSubmission"> | string
    submittedAt?: DateTimeWithAggregatesFilter<"ExamSubmission"> | Date | string
    expireAt?: DateTimeWithAggregatesFilter<"ExamSubmission"> | Date | string
    score?: IntNullableWithAggregatesFilter<"ExamSubmission"> | number | null
    correct?: IntNullableWithAggregatesFilter<"ExamSubmission"> | number | null
    incorrect?: IntNullableWithAggregatesFilter<"ExamSubmission"> | number | null
    passed?: BoolNullableWithAggregatesFilter<"ExamSubmission"> | boolean | null
    updatedAt?: DateTimeWithAggregatesFilter<"ExamSubmission"> | Date | string
  }

  export type SubmissionAnswerWhereInput = {
    AND?: SubmissionAnswerWhereInput | SubmissionAnswerWhereInput[]
    OR?: SubmissionAnswerWhereInput[]
    NOT?: SubmissionAnswerWhereInput | SubmissionAnswerWhereInput[]
    id?: StringFilter<"SubmissionAnswer"> | string
    submissionId?: StringFilter<"SubmissionAnswer"> | string
    questionId?: StringFilter<"SubmissionAnswer"> | string
    selectedAnswerIds?: StringFilter<"SubmissionAnswer"> | string
    submission?: XOR<ExamSubmissionScalarRelationFilter, ExamSubmissionWhereInput>
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
  }

  export type SubmissionAnswerOrderByWithRelationInput = {
    id?: SortOrder
    submissionId?: SortOrder
    questionId?: SortOrder
    selectedAnswerIds?: SortOrder
    submission?: ExamSubmissionOrderByWithRelationInput
    question?: QuestionOrderByWithRelationInput
  }

  export type SubmissionAnswerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SubmissionAnswerWhereInput | SubmissionAnswerWhereInput[]
    OR?: SubmissionAnswerWhereInput[]
    NOT?: SubmissionAnswerWhereInput | SubmissionAnswerWhereInput[]
    submissionId?: StringFilter<"SubmissionAnswer"> | string
    questionId?: StringFilter<"SubmissionAnswer"> | string
    selectedAnswerIds?: StringFilter<"SubmissionAnswer"> | string
    submission?: XOR<ExamSubmissionScalarRelationFilter, ExamSubmissionWhereInput>
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
  }, "id">

  export type SubmissionAnswerOrderByWithAggregationInput = {
    id?: SortOrder
    submissionId?: SortOrder
    questionId?: SortOrder
    selectedAnswerIds?: SortOrder
    _count?: SubmissionAnswerCountOrderByAggregateInput
    _max?: SubmissionAnswerMaxOrderByAggregateInput
    _min?: SubmissionAnswerMinOrderByAggregateInput
  }

  export type SubmissionAnswerScalarWhereWithAggregatesInput = {
    AND?: SubmissionAnswerScalarWhereWithAggregatesInput | SubmissionAnswerScalarWhereWithAggregatesInput[]
    OR?: SubmissionAnswerScalarWhereWithAggregatesInput[]
    NOT?: SubmissionAnswerScalarWhereWithAggregatesInput | SubmissionAnswerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SubmissionAnswer"> | string
    submissionId?: StringWithAggregatesFilter<"SubmissionAnswer"> | string
    questionId?: StringWithAggregatesFilter<"SubmissionAnswer"> | string
    selectedAnswerIds?: StringWithAggregatesFilter<"SubmissionAnswer"> | string
  }

  export type UserCreateInput = {
    id?: string
    fullName: string
    email: string
    purpose: string
    institution: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    Exam?: ExamCreateNestedManyWithoutAuthorInput
    ExamSubmission?: ExamSubmissionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    fullName: string
    email: string
    purpose: string
    institution: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    Exam?: ExamUncheckedCreateNestedManyWithoutAuthorInput
    ExamSubmission?: ExamSubmissionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    purpose?: StringFieldUpdateOperationsInput | string
    institution?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Exam?: ExamUpdateManyWithoutAuthorNestedInput
    ExamSubmission?: ExamSubmissionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    purpose?: StringFieldUpdateOperationsInput | string
    institution?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Exam?: ExamUncheckedUpdateManyWithoutAuthorNestedInput
    ExamSubmission?: ExamSubmissionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    fullName: string
    email: string
    purpose: string
    institution: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    purpose?: StringFieldUpdateOperationsInput | string
    institution?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    purpose?: StringFieldUpdateOperationsInput | string
    institution?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExamCreateInput = {
    id?: string
    title: string
    tags: string
    category: string
    duration: number
    minScore?: number | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    publishedAt?: Date | string | null
    isDeleted?: boolean
    deletedAt?: Date | string | null
    author: UserCreateNestedOneWithoutExamInput
    questions?: QuestionCreateNestedManyWithoutExamInput
    ExamSubmission?: ExamSubmissionCreateNestedManyWithoutExamInput
  }

  export type ExamUncheckedCreateInput = {
    id?: string
    title: string
    tags: string
    category: string
    duration: number
    minScore?: number | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    publishedAt?: Date | string | null
    isDeleted?: boolean
    deletedAt?: Date | string | null
    authorId: string
    questions?: QuestionUncheckedCreateNestedManyWithoutExamInput
    ExamSubmission?: ExamSubmissionUncheckedCreateNestedManyWithoutExamInput
  }

  export type ExamUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    minScore?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    author?: UserUpdateOneRequiredWithoutExamNestedInput
    questions?: QuestionUpdateManyWithoutExamNestedInput
    ExamSubmission?: ExamSubmissionUpdateManyWithoutExamNestedInput
  }

  export type ExamUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    minScore?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    authorId?: StringFieldUpdateOperationsInput | string
    questions?: QuestionUncheckedUpdateManyWithoutExamNestedInput
    ExamSubmission?: ExamSubmissionUncheckedUpdateManyWithoutExamNestedInput
  }

  export type ExamCreateManyInput = {
    id?: string
    title: string
    tags: string
    category: string
    duration: number
    minScore?: number | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    publishedAt?: Date | string | null
    isDeleted?: boolean
    deletedAt?: Date | string | null
    authorId: string
  }

  export type ExamUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    minScore?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ExamUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    minScore?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    authorId?: StringFieldUpdateOperationsInput | string
  }

  export type QuestionCreateInput = {
    id?: string
    title: string
    image?: string | null
    imageLabel?: string | null
    type: $Enums.QuestionType
    createdAt?: Date | string
    correctAnswerIndex?: number | null
    exam: ExamCreateNestedOneWithoutQuestionsInput
    answers?: AnswerCreateNestedManyWithoutQuestionInput
    SubmissionAnswer?: SubmissionAnswerCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateInput = {
    id?: string
    title: string
    image?: string | null
    imageLabel?: string | null
    type: $Enums.QuestionType
    examId: string
    createdAt?: Date | string
    correctAnswerIndex?: number | null
    answers?: AnswerUncheckedCreateNestedManyWithoutQuestionInput
    SubmissionAnswer?: SubmissionAnswerUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    imageLabel?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    correctAnswerIndex?: NullableIntFieldUpdateOperationsInput | number | null
    exam?: ExamUpdateOneRequiredWithoutQuestionsNestedInput
    answers?: AnswerUpdateManyWithoutQuestionNestedInput
    SubmissionAnswer?: SubmissionAnswerUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    imageLabel?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    examId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    correctAnswerIndex?: NullableIntFieldUpdateOperationsInput | number | null
    answers?: AnswerUncheckedUpdateManyWithoutQuestionNestedInput
    SubmissionAnswer?: SubmissionAnswerUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionCreateManyInput = {
    id?: string
    title: string
    image?: string | null
    imageLabel?: string | null
    type: $Enums.QuestionType
    examId: string
    createdAt?: Date | string
    correctAnswerIndex?: number | null
  }

  export type QuestionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    imageLabel?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    correctAnswerIndex?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type QuestionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    imageLabel?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    examId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    correctAnswerIndex?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AnswerCreateInput = {
    id?: string
    answerText: string
    isCorrect: boolean
    question: QuestionCreateNestedOneWithoutAnswersInput
  }

  export type AnswerUncheckedCreateInput = {
    id?: string
    answerText: string
    isCorrect: boolean
    questionId: string
  }

  export type AnswerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    answerText?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    question?: QuestionUpdateOneRequiredWithoutAnswersNestedInput
  }

  export type AnswerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    answerText?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    questionId?: StringFieldUpdateOperationsInput | string
  }

  export type AnswerCreateManyInput = {
    id?: string
    answerText: string
    isCorrect: boolean
    questionId: string
  }

  export type AnswerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    answerText?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AnswerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    answerText?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    questionId?: StringFieldUpdateOperationsInput | string
  }

  export type ExamSubmissionCreateInput = {
    id?: string
    submittedAt?: Date | string
    expireAt: Date | string
    score?: number | null
    correct?: number | null
    incorrect?: number | null
    passed?: boolean | null
    updatedAt?: Date | string
    exam: ExamCreateNestedOneWithoutExamSubmissionInput
    user: UserCreateNestedOneWithoutExamSubmissionInput
    answers?: SubmissionAnswerCreateNestedManyWithoutSubmissionInput
  }

  export type ExamSubmissionUncheckedCreateInput = {
    id?: string
    examId: string
    userId: string
    submittedAt?: Date | string
    expireAt: Date | string
    score?: number | null
    correct?: number | null
    incorrect?: number | null
    passed?: boolean | null
    updatedAt?: Date | string
    answers?: SubmissionAnswerUncheckedCreateNestedManyWithoutSubmissionInput
  }

  export type ExamSubmissionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expireAt?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: NullableIntFieldUpdateOperationsInput | number | null
    correct?: NullableIntFieldUpdateOperationsInput | number | null
    incorrect?: NullableIntFieldUpdateOperationsInput | number | null
    passed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exam?: ExamUpdateOneRequiredWithoutExamSubmissionNestedInput
    user?: UserUpdateOneRequiredWithoutExamSubmissionNestedInput
    answers?: SubmissionAnswerUpdateManyWithoutSubmissionNestedInput
  }

  export type ExamSubmissionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    examId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expireAt?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: NullableIntFieldUpdateOperationsInput | number | null
    correct?: NullableIntFieldUpdateOperationsInput | number | null
    incorrect?: NullableIntFieldUpdateOperationsInput | number | null
    passed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: SubmissionAnswerUncheckedUpdateManyWithoutSubmissionNestedInput
  }

  export type ExamSubmissionCreateManyInput = {
    id?: string
    examId: string
    userId: string
    submittedAt?: Date | string
    expireAt: Date | string
    score?: number | null
    correct?: number | null
    incorrect?: number | null
    passed?: boolean | null
    updatedAt?: Date | string
  }

  export type ExamSubmissionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expireAt?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: NullableIntFieldUpdateOperationsInput | number | null
    correct?: NullableIntFieldUpdateOperationsInput | number | null
    incorrect?: NullableIntFieldUpdateOperationsInput | number | null
    passed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExamSubmissionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    examId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expireAt?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: NullableIntFieldUpdateOperationsInput | number | null
    correct?: NullableIntFieldUpdateOperationsInput | number | null
    incorrect?: NullableIntFieldUpdateOperationsInput | number | null
    passed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionAnswerCreateInput = {
    id?: string
    selectedAnswerIds: string
    submission: ExamSubmissionCreateNestedOneWithoutAnswersInput
    question: QuestionCreateNestedOneWithoutSubmissionAnswerInput
  }

  export type SubmissionAnswerUncheckedCreateInput = {
    id?: string
    submissionId: string
    questionId: string
    selectedAnswerIds: string
  }

  export type SubmissionAnswerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    selectedAnswerIds?: StringFieldUpdateOperationsInput | string
    submission?: ExamSubmissionUpdateOneRequiredWithoutAnswersNestedInput
    question?: QuestionUpdateOneRequiredWithoutSubmissionAnswerNestedInput
  }

  export type SubmissionAnswerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    submissionId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    selectedAnswerIds?: StringFieldUpdateOperationsInput | string
  }

  export type SubmissionAnswerCreateManyInput = {
    id?: string
    submissionId: string
    questionId: string
    selectedAnswerIds: string
  }

  export type SubmissionAnswerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    selectedAnswerIds?: StringFieldUpdateOperationsInput | string
  }

  export type SubmissionAnswerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    submissionId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    selectedAnswerIds?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ExamListRelationFilter = {
    every?: ExamWhereInput
    some?: ExamWhereInput
    none?: ExamWhereInput
  }

  export type ExamSubmissionListRelationFilter = {
    every?: ExamSubmissionWhereInput
    some?: ExamSubmissionWhereInput
    none?: ExamSubmissionWhereInput
  }

  export type ExamOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExamSubmissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    purpose?: SortOrder
    institution?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    purpose?: SortOrder
    institution?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    purpose?: SortOrder
    institution?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type QuestionListRelationFilter = {
    every?: QuestionWhereInput
    some?: QuestionWhereInput
    none?: QuestionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type QuestionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExamCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    tags?: SortOrder
    category?: SortOrder
    duration?: SortOrder
    minScore?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    publishedAt?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    authorId?: SortOrder
  }

  export type ExamAvgOrderByAggregateInput = {
    duration?: SortOrder
    minScore?: SortOrder
  }

  export type ExamMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    tags?: SortOrder
    category?: SortOrder
    duration?: SortOrder
    minScore?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    publishedAt?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    authorId?: SortOrder
  }

  export type ExamMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    tags?: SortOrder
    category?: SortOrder
    duration?: SortOrder
    minScore?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    publishedAt?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    authorId?: SortOrder
  }

  export type ExamSumOrderByAggregateInput = {
    duration?: SortOrder
    minScore?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumQuestionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.QuestionType | EnumQuestionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.QuestionType[] | ListEnumQuestionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.QuestionType[] | ListEnumQuestionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumQuestionTypeFilter<$PrismaModel> | $Enums.QuestionType
  }

  export type ExamScalarRelationFilter = {
    is?: ExamWhereInput
    isNot?: ExamWhereInput
  }

  export type AnswerListRelationFilter = {
    every?: AnswerWhereInput
    some?: AnswerWhereInput
    none?: AnswerWhereInput
  }

  export type SubmissionAnswerListRelationFilter = {
    every?: SubmissionAnswerWhereInput
    some?: SubmissionAnswerWhereInput
    none?: SubmissionAnswerWhereInput
  }

  export type AnswerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubmissionAnswerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuestionCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    image?: SortOrder
    imageLabel?: SortOrder
    type?: SortOrder
    examId?: SortOrder
    createdAt?: SortOrder
    correctAnswerIndex?: SortOrder
  }

  export type QuestionAvgOrderByAggregateInput = {
    correctAnswerIndex?: SortOrder
  }

  export type QuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    image?: SortOrder
    imageLabel?: SortOrder
    type?: SortOrder
    examId?: SortOrder
    createdAt?: SortOrder
    correctAnswerIndex?: SortOrder
  }

  export type QuestionMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    image?: SortOrder
    imageLabel?: SortOrder
    type?: SortOrder
    examId?: SortOrder
    createdAt?: SortOrder
    correctAnswerIndex?: SortOrder
  }

  export type QuestionSumOrderByAggregateInput = {
    correctAnswerIndex?: SortOrder
  }

  export type EnumQuestionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.QuestionType | EnumQuestionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.QuestionType[] | ListEnumQuestionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.QuestionType[] | ListEnumQuestionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumQuestionTypeWithAggregatesFilter<$PrismaModel> | $Enums.QuestionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumQuestionTypeFilter<$PrismaModel>
    _max?: NestedEnumQuestionTypeFilter<$PrismaModel>
  }

  export type QuestionScalarRelationFilter = {
    is?: QuestionWhereInput
    isNot?: QuestionWhereInput
  }

  export type AnswerCountOrderByAggregateInput = {
    id?: SortOrder
    answerText?: SortOrder
    isCorrect?: SortOrder
    questionId?: SortOrder
  }

  export type AnswerMaxOrderByAggregateInput = {
    id?: SortOrder
    answerText?: SortOrder
    isCorrect?: SortOrder
    questionId?: SortOrder
  }

  export type AnswerMinOrderByAggregateInput = {
    id?: SortOrder
    answerText?: SortOrder
    isCorrect?: SortOrder
    questionId?: SortOrder
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type ExamSubmissionCountOrderByAggregateInput = {
    id?: SortOrder
    examId?: SortOrder
    userId?: SortOrder
    submittedAt?: SortOrder
    expireAt?: SortOrder
    score?: SortOrder
    correct?: SortOrder
    incorrect?: SortOrder
    passed?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExamSubmissionAvgOrderByAggregateInput = {
    score?: SortOrder
    correct?: SortOrder
    incorrect?: SortOrder
  }

  export type ExamSubmissionMaxOrderByAggregateInput = {
    id?: SortOrder
    examId?: SortOrder
    userId?: SortOrder
    submittedAt?: SortOrder
    expireAt?: SortOrder
    score?: SortOrder
    correct?: SortOrder
    incorrect?: SortOrder
    passed?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExamSubmissionMinOrderByAggregateInput = {
    id?: SortOrder
    examId?: SortOrder
    userId?: SortOrder
    submittedAt?: SortOrder
    expireAt?: SortOrder
    score?: SortOrder
    correct?: SortOrder
    incorrect?: SortOrder
    passed?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExamSubmissionSumOrderByAggregateInput = {
    score?: SortOrder
    correct?: SortOrder
    incorrect?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type ExamSubmissionScalarRelationFilter = {
    is?: ExamSubmissionWhereInput
    isNot?: ExamSubmissionWhereInput
  }

  export type SubmissionAnswerCountOrderByAggregateInput = {
    id?: SortOrder
    submissionId?: SortOrder
    questionId?: SortOrder
    selectedAnswerIds?: SortOrder
  }

  export type SubmissionAnswerMaxOrderByAggregateInput = {
    id?: SortOrder
    submissionId?: SortOrder
    questionId?: SortOrder
    selectedAnswerIds?: SortOrder
  }

  export type SubmissionAnswerMinOrderByAggregateInput = {
    id?: SortOrder
    submissionId?: SortOrder
    questionId?: SortOrder
    selectedAnswerIds?: SortOrder
  }

  export type ExamCreateNestedManyWithoutAuthorInput = {
    create?: XOR<ExamCreateWithoutAuthorInput, ExamUncheckedCreateWithoutAuthorInput> | ExamCreateWithoutAuthorInput[] | ExamUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ExamCreateOrConnectWithoutAuthorInput | ExamCreateOrConnectWithoutAuthorInput[]
    createMany?: ExamCreateManyAuthorInputEnvelope
    connect?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
  }

  export type ExamSubmissionCreateNestedManyWithoutUserInput = {
    create?: XOR<ExamSubmissionCreateWithoutUserInput, ExamSubmissionUncheckedCreateWithoutUserInput> | ExamSubmissionCreateWithoutUserInput[] | ExamSubmissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExamSubmissionCreateOrConnectWithoutUserInput | ExamSubmissionCreateOrConnectWithoutUserInput[]
    createMany?: ExamSubmissionCreateManyUserInputEnvelope
    connect?: ExamSubmissionWhereUniqueInput | ExamSubmissionWhereUniqueInput[]
  }

  export type ExamUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<ExamCreateWithoutAuthorInput, ExamUncheckedCreateWithoutAuthorInput> | ExamCreateWithoutAuthorInput[] | ExamUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ExamCreateOrConnectWithoutAuthorInput | ExamCreateOrConnectWithoutAuthorInput[]
    createMany?: ExamCreateManyAuthorInputEnvelope
    connect?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
  }

  export type ExamSubmissionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ExamSubmissionCreateWithoutUserInput, ExamSubmissionUncheckedCreateWithoutUserInput> | ExamSubmissionCreateWithoutUserInput[] | ExamSubmissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExamSubmissionCreateOrConnectWithoutUserInput | ExamSubmissionCreateOrConnectWithoutUserInput[]
    createMany?: ExamSubmissionCreateManyUserInputEnvelope
    connect?: ExamSubmissionWhereUniqueInput | ExamSubmissionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ExamUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<ExamCreateWithoutAuthorInput, ExamUncheckedCreateWithoutAuthorInput> | ExamCreateWithoutAuthorInput[] | ExamUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ExamCreateOrConnectWithoutAuthorInput | ExamCreateOrConnectWithoutAuthorInput[]
    upsert?: ExamUpsertWithWhereUniqueWithoutAuthorInput | ExamUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: ExamCreateManyAuthorInputEnvelope
    set?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
    disconnect?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
    delete?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
    connect?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
    update?: ExamUpdateWithWhereUniqueWithoutAuthorInput | ExamUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: ExamUpdateManyWithWhereWithoutAuthorInput | ExamUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: ExamScalarWhereInput | ExamScalarWhereInput[]
  }

  export type ExamSubmissionUpdateManyWithoutUserNestedInput = {
    create?: XOR<ExamSubmissionCreateWithoutUserInput, ExamSubmissionUncheckedCreateWithoutUserInput> | ExamSubmissionCreateWithoutUserInput[] | ExamSubmissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExamSubmissionCreateOrConnectWithoutUserInput | ExamSubmissionCreateOrConnectWithoutUserInput[]
    upsert?: ExamSubmissionUpsertWithWhereUniqueWithoutUserInput | ExamSubmissionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ExamSubmissionCreateManyUserInputEnvelope
    set?: ExamSubmissionWhereUniqueInput | ExamSubmissionWhereUniqueInput[]
    disconnect?: ExamSubmissionWhereUniqueInput | ExamSubmissionWhereUniqueInput[]
    delete?: ExamSubmissionWhereUniqueInput | ExamSubmissionWhereUniqueInput[]
    connect?: ExamSubmissionWhereUniqueInput | ExamSubmissionWhereUniqueInput[]
    update?: ExamSubmissionUpdateWithWhereUniqueWithoutUserInput | ExamSubmissionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ExamSubmissionUpdateManyWithWhereWithoutUserInput | ExamSubmissionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ExamSubmissionScalarWhereInput | ExamSubmissionScalarWhereInput[]
  }

  export type ExamUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<ExamCreateWithoutAuthorInput, ExamUncheckedCreateWithoutAuthorInput> | ExamCreateWithoutAuthorInput[] | ExamUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ExamCreateOrConnectWithoutAuthorInput | ExamCreateOrConnectWithoutAuthorInput[]
    upsert?: ExamUpsertWithWhereUniqueWithoutAuthorInput | ExamUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: ExamCreateManyAuthorInputEnvelope
    set?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
    disconnect?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
    delete?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
    connect?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
    update?: ExamUpdateWithWhereUniqueWithoutAuthorInput | ExamUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: ExamUpdateManyWithWhereWithoutAuthorInput | ExamUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: ExamScalarWhereInput | ExamScalarWhereInput[]
  }

  export type ExamSubmissionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ExamSubmissionCreateWithoutUserInput, ExamSubmissionUncheckedCreateWithoutUserInput> | ExamSubmissionCreateWithoutUserInput[] | ExamSubmissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExamSubmissionCreateOrConnectWithoutUserInput | ExamSubmissionCreateOrConnectWithoutUserInput[]
    upsert?: ExamSubmissionUpsertWithWhereUniqueWithoutUserInput | ExamSubmissionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ExamSubmissionCreateManyUserInputEnvelope
    set?: ExamSubmissionWhereUniqueInput | ExamSubmissionWhereUniqueInput[]
    disconnect?: ExamSubmissionWhereUniqueInput | ExamSubmissionWhereUniqueInput[]
    delete?: ExamSubmissionWhereUniqueInput | ExamSubmissionWhereUniqueInput[]
    connect?: ExamSubmissionWhereUniqueInput | ExamSubmissionWhereUniqueInput[]
    update?: ExamSubmissionUpdateWithWhereUniqueWithoutUserInput | ExamSubmissionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ExamSubmissionUpdateManyWithWhereWithoutUserInput | ExamSubmissionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ExamSubmissionScalarWhereInput | ExamSubmissionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutExamInput = {
    create?: XOR<UserCreateWithoutExamInput, UserUncheckedCreateWithoutExamInput>
    connectOrCreate?: UserCreateOrConnectWithoutExamInput
    connect?: UserWhereUniqueInput
  }

  export type QuestionCreateNestedManyWithoutExamInput = {
    create?: XOR<QuestionCreateWithoutExamInput, QuestionUncheckedCreateWithoutExamInput> | QuestionCreateWithoutExamInput[] | QuestionUncheckedCreateWithoutExamInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutExamInput | QuestionCreateOrConnectWithoutExamInput[]
    createMany?: QuestionCreateManyExamInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type ExamSubmissionCreateNestedManyWithoutExamInput = {
    create?: XOR<ExamSubmissionCreateWithoutExamInput, ExamSubmissionUncheckedCreateWithoutExamInput> | ExamSubmissionCreateWithoutExamInput[] | ExamSubmissionUncheckedCreateWithoutExamInput[]
    connectOrCreate?: ExamSubmissionCreateOrConnectWithoutExamInput | ExamSubmissionCreateOrConnectWithoutExamInput[]
    createMany?: ExamSubmissionCreateManyExamInputEnvelope
    connect?: ExamSubmissionWhereUniqueInput | ExamSubmissionWhereUniqueInput[]
  }

  export type QuestionUncheckedCreateNestedManyWithoutExamInput = {
    create?: XOR<QuestionCreateWithoutExamInput, QuestionUncheckedCreateWithoutExamInput> | QuestionCreateWithoutExamInput[] | QuestionUncheckedCreateWithoutExamInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutExamInput | QuestionCreateOrConnectWithoutExamInput[]
    createMany?: QuestionCreateManyExamInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type ExamSubmissionUncheckedCreateNestedManyWithoutExamInput = {
    create?: XOR<ExamSubmissionCreateWithoutExamInput, ExamSubmissionUncheckedCreateWithoutExamInput> | ExamSubmissionCreateWithoutExamInput[] | ExamSubmissionUncheckedCreateWithoutExamInput[]
    connectOrCreate?: ExamSubmissionCreateOrConnectWithoutExamInput | ExamSubmissionCreateOrConnectWithoutExamInput[]
    createMany?: ExamSubmissionCreateManyExamInputEnvelope
    connect?: ExamSubmissionWhereUniqueInput | ExamSubmissionWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutExamNestedInput = {
    create?: XOR<UserCreateWithoutExamInput, UserUncheckedCreateWithoutExamInput>
    connectOrCreate?: UserCreateOrConnectWithoutExamInput
    upsert?: UserUpsertWithoutExamInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutExamInput, UserUpdateWithoutExamInput>, UserUncheckedUpdateWithoutExamInput>
  }

  export type QuestionUpdateManyWithoutExamNestedInput = {
    create?: XOR<QuestionCreateWithoutExamInput, QuestionUncheckedCreateWithoutExamInput> | QuestionCreateWithoutExamInput[] | QuestionUncheckedCreateWithoutExamInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutExamInput | QuestionCreateOrConnectWithoutExamInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutExamInput | QuestionUpsertWithWhereUniqueWithoutExamInput[]
    createMany?: QuestionCreateManyExamInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutExamInput | QuestionUpdateWithWhereUniqueWithoutExamInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutExamInput | QuestionUpdateManyWithWhereWithoutExamInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type ExamSubmissionUpdateManyWithoutExamNestedInput = {
    create?: XOR<ExamSubmissionCreateWithoutExamInput, ExamSubmissionUncheckedCreateWithoutExamInput> | ExamSubmissionCreateWithoutExamInput[] | ExamSubmissionUncheckedCreateWithoutExamInput[]
    connectOrCreate?: ExamSubmissionCreateOrConnectWithoutExamInput | ExamSubmissionCreateOrConnectWithoutExamInput[]
    upsert?: ExamSubmissionUpsertWithWhereUniqueWithoutExamInput | ExamSubmissionUpsertWithWhereUniqueWithoutExamInput[]
    createMany?: ExamSubmissionCreateManyExamInputEnvelope
    set?: ExamSubmissionWhereUniqueInput | ExamSubmissionWhereUniqueInput[]
    disconnect?: ExamSubmissionWhereUniqueInput | ExamSubmissionWhereUniqueInput[]
    delete?: ExamSubmissionWhereUniqueInput | ExamSubmissionWhereUniqueInput[]
    connect?: ExamSubmissionWhereUniqueInput | ExamSubmissionWhereUniqueInput[]
    update?: ExamSubmissionUpdateWithWhereUniqueWithoutExamInput | ExamSubmissionUpdateWithWhereUniqueWithoutExamInput[]
    updateMany?: ExamSubmissionUpdateManyWithWhereWithoutExamInput | ExamSubmissionUpdateManyWithWhereWithoutExamInput[]
    deleteMany?: ExamSubmissionScalarWhereInput | ExamSubmissionScalarWhereInput[]
  }

  export type QuestionUncheckedUpdateManyWithoutExamNestedInput = {
    create?: XOR<QuestionCreateWithoutExamInput, QuestionUncheckedCreateWithoutExamInput> | QuestionCreateWithoutExamInput[] | QuestionUncheckedCreateWithoutExamInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutExamInput | QuestionCreateOrConnectWithoutExamInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutExamInput | QuestionUpsertWithWhereUniqueWithoutExamInput[]
    createMany?: QuestionCreateManyExamInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutExamInput | QuestionUpdateWithWhereUniqueWithoutExamInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutExamInput | QuestionUpdateManyWithWhereWithoutExamInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type ExamSubmissionUncheckedUpdateManyWithoutExamNestedInput = {
    create?: XOR<ExamSubmissionCreateWithoutExamInput, ExamSubmissionUncheckedCreateWithoutExamInput> | ExamSubmissionCreateWithoutExamInput[] | ExamSubmissionUncheckedCreateWithoutExamInput[]
    connectOrCreate?: ExamSubmissionCreateOrConnectWithoutExamInput | ExamSubmissionCreateOrConnectWithoutExamInput[]
    upsert?: ExamSubmissionUpsertWithWhereUniqueWithoutExamInput | ExamSubmissionUpsertWithWhereUniqueWithoutExamInput[]
    createMany?: ExamSubmissionCreateManyExamInputEnvelope
    set?: ExamSubmissionWhereUniqueInput | ExamSubmissionWhereUniqueInput[]
    disconnect?: ExamSubmissionWhereUniqueInput | ExamSubmissionWhereUniqueInput[]
    delete?: ExamSubmissionWhereUniqueInput | ExamSubmissionWhereUniqueInput[]
    connect?: ExamSubmissionWhereUniqueInput | ExamSubmissionWhereUniqueInput[]
    update?: ExamSubmissionUpdateWithWhereUniqueWithoutExamInput | ExamSubmissionUpdateWithWhereUniqueWithoutExamInput[]
    updateMany?: ExamSubmissionUpdateManyWithWhereWithoutExamInput | ExamSubmissionUpdateManyWithWhereWithoutExamInput[]
    deleteMany?: ExamSubmissionScalarWhereInput | ExamSubmissionScalarWhereInput[]
  }

  export type ExamCreateNestedOneWithoutQuestionsInput = {
    create?: XOR<ExamCreateWithoutQuestionsInput, ExamUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: ExamCreateOrConnectWithoutQuestionsInput
    connect?: ExamWhereUniqueInput
  }

  export type AnswerCreateNestedManyWithoutQuestionInput = {
    create?: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput> | AnswerCreateWithoutQuestionInput[] | AnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutQuestionInput | AnswerCreateOrConnectWithoutQuestionInput[]
    createMany?: AnswerCreateManyQuestionInputEnvelope
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
  }

  export type SubmissionAnswerCreateNestedManyWithoutQuestionInput = {
    create?: XOR<SubmissionAnswerCreateWithoutQuestionInput, SubmissionAnswerUncheckedCreateWithoutQuestionInput> | SubmissionAnswerCreateWithoutQuestionInput[] | SubmissionAnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: SubmissionAnswerCreateOrConnectWithoutQuestionInput | SubmissionAnswerCreateOrConnectWithoutQuestionInput[]
    createMany?: SubmissionAnswerCreateManyQuestionInputEnvelope
    connect?: SubmissionAnswerWhereUniqueInput | SubmissionAnswerWhereUniqueInput[]
  }

  export type AnswerUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput> | AnswerCreateWithoutQuestionInput[] | AnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutQuestionInput | AnswerCreateOrConnectWithoutQuestionInput[]
    createMany?: AnswerCreateManyQuestionInputEnvelope
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
  }

  export type SubmissionAnswerUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<SubmissionAnswerCreateWithoutQuestionInput, SubmissionAnswerUncheckedCreateWithoutQuestionInput> | SubmissionAnswerCreateWithoutQuestionInput[] | SubmissionAnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: SubmissionAnswerCreateOrConnectWithoutQuestionInput | SubmissionAnswerCreateOrConnectWithoutQuestionInput[]
    createMany?: SubmissionAnswerCreateManyQuestionInputEnvelope
    connect?: SubmissionAnswerWhereUniqueInput | SubmissionAnswerWhereUniqueInput[]
  }

  export type EnumQuestionTypeFieldUpdateOperationsInput = {
    set?: $Enums.QuestionType
  }

  export type ExamUpdateOneRequiredWithoutQuestionsNestedInput = {
    create?: XOR<ExamCreateWithoutQuestionsInput, ExamUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: ExamCreateOrConnectWithoutQuestionsInput
    upsert?: ExamUpsertWithoutQuestionsInput
    connect?: ExamWhereUniqueInput
    update?: XOR<XOR<ExamUpdateToOneWithWhereWithoutQuestionsInput, ExamUpdateWithoutQuestionsInput>, ExamUncheckedUpdateWithoutQuestionsInput>
  }

  export type AnswerUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput> | AnswerCreateWithoutQuestionInput[] | AnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutQuestionInput | AnswerCreateOrConnectWithoutQuestionInput[]
    upsert?: AnswerUpsertWithWhereUniqueWithoutQuestionInput | AnswerUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: AnswerCreateManyQuestionInputEnvelope
    set?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    disconnect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    delete?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    update?: AnswerUpdateWithWhereUniqueWithoutQuestionInput | AnswerUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: AnswerUpdateManyWithWhereWithoutQuestionInput | AnswerUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
  }

  export type SubmissionAnswerUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<SubmissionAnswerCreateWithoutQuestionInput, SubmissionAnswerUncheckedCreateWithoutQuestionInput> | SubmissionAnswerCreateWithoutQuestionInput[] | SubmissionAnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: SubmissionAnswerCreateOrConnectWithoutQuestionInput | SubmissionAnswerCreateOrConnectWithoutQuestionInput[]
    upsert?: SubmissionAnswerUpsertWithWhereUniqueWithoutQuestionInput | SubmissionAnswerUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: SubmissionAnswerCreateManyQuestionInputEnvelope
    set?: SubmissionAnswerWhereUniqueInput | SubmissionAnswerWhereUniqueInput[]
    disconnect?: SubmissionAnswerWhereUniqueInput | SubmissionAnswerWhereUniqueInput[]
    delete?: SubmissionAnswerWhereUniqueInput | SubmissionAnswerWhereUniqueInput[]
    connect?: SubmissionAnswerWhereUniqueInput | SubmissionAnswerWhereUniqueInput[]
    update?: SubmissionAnswerUpdateWithWhereUniqueWithoutQuestionInput | SubmissionAnswerUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: SubmissionAnswerUpdateManyWithWhereWithoutQuestionInput | SubmissionAnswerUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: SubmissionAnswerScalarWhereInput | SubmissionAnswerScalarWhereInput[]
  }

  export type AnswerUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput> | AnswerCreateWithoutQuestionInput[] | AnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutQuestionInput | AnswerCreateOrConnectWithoutQuestionInput[]
    upsert?: AnswerUpsertWithWhereUniqueWithoutQuestionInput | AnswerUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: AnswerCreateManyQuestionInputEnvelope
    set?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    disconnect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    delete?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    update?: AnswerUpdateWithWhereUniqueWithoutQuestionInput | AnswerUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: AnswerUpdateManyWithWhereWithoutQuestionInput | AnswerUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
  }

  export type SubmissionAnswerUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<SubmissionAnswerCreateWithoutQuestionInput, SubmissionAnswerUncheckedCreateWithoutQuestionInput> | SubmissionAnswerCreateWithoutQuestionInput[] | SubmissionAnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: SubmissionAnswerCreateOrConnectWithoutQuestionInput | SubmissionAnswerCreateOrConnectWithoutQuestionInput[]
    upsert?: SubmissionAnswerUpsertWithWhereUniqueWithoutQuestionInput | SubmissionAnswerUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: SubmissionAnswerCreateManyQuestionInputEnvelope
    set?: SubmissionAnswerWhereUniqueInput | SubmissionAnswerWhereUniqueInput[]
    disconnect?: SubmissionAnswerWhereUniqueInput | SubmissionAnswerWhereUniqueInput[]
    delete?: SubmissionAnswerWhereUniqueInput | SubmissionAnswerWhereUniqueInput[]
    connect?: SubmissionAnswerWhereUniqueInput | SubmissionAnswerWhereUniqueInput[]
    update?: SubmissionAnswerUpdateWithWhereUniqueWithoutQuestionInput | SubmissionAnswerUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: SubmissionAnswerUpdateManyWithWhereWithoutQuestionInput | SubmissionAnswerUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: SubmissionAnswerScalarWhereInput | SubmissionAnswerScalarWhereInput[]
  }

  export type QuestionCreateNestedOneWithoutAnswersInput = {
    create?: XOR<QuestionCreateWithoutAnswersInput, QuestionUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutAnswersInput
    connect?: QuestionWhereUniqueInput
  }

  export type QuestionUpdateOneRequiredWithoutAnswersNestedInput = {
    create?: XOR<QuestionCreateWithoutAnswersInput, QuestionUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutAnswersInput
    upsert?: QuestionUpsertWithoutAnswersInput
    connect?: QuestionWhereUniqueInput
    update?: XOR<XOR<QuestionUpdateToOneWithWhereWithoutAnswersInput, QuestionUpdateWithoutAnswersInput>, QuestionUncheckedUpdateWithoutAnswersInput>
  }

  export type ExamCreateNestedOneWithoutExamSubmissionInput = {
    create?: XOR<ExamCreateWithoutExamSubmissionInput, ExamUncheckedCreateWithoutExamSubmissionInput>
    connectOrCreate?: ExamCreateOrConnectWithoutExamSubmissionInput
    connect?: ExamWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutExamSubmissionInput = {
    create?: XOR<UserCreateWithoutExamSubmissionInput, UserUncheckedCreateWithoutExamSubmissionInput>
    connectOrCreate?: UserCreateOrConnectWithoutExamSubmissionInput
    connect?: UserWhereUniqueInput
  }

  export type SubmissionAnswerCreateNestedManyWithoutSubmissionInput = {
    create?: XOR<SubmissionAnswerCreateWithoutSubmissionInput, SubmissionAnswerUncheckedCreateWithoutSubmissionInput> | SubmissionAnswerCreateWithoutSubmissionInput[] | SubmissionAnswerUncheckedCreateWithoutSubmissionInput[]
    connectOrCreate?: SubmissionAnswerCreateOrConnectWithoutSubmissionInput | SubmissionAnswerCreateOrConnectWithoutSubmissionInput[]
    createMany?: SubmissionAnswerCreateManySubmissionInputEnvelope
    connect?: SubmissionAnswerWhereUniqueInput | SubmissionAnswerWhereUniqueInput[]
  }

  export type SubmissionAnswerUncheckedCreateNestedManyWithoutSubmissionInput = {
    create?: XOR<SubmissionAnswerCreateWithoutSubmissionInput, SubmissionAnswerUncheckedCreateWithoutSubmissionInput> | SubmissionAnswerCreateWithoutSubmissionInput[] | SubmissionAnswerUncheckedCreateWithoutSubmissionInput[]
    connectOrCreate?: SubmissionAnswerCreateOrConnectWithoutSubmissionInput | SubmissionAnswerCreateOrConnectWithoutSubmissionInput[]
    createMany?: SubmissionAnswerCreateManySubmissionInputEnvelope
    connect?: SubmissionAnswerWhereUniqueInput | SubmissionAnswerWhereUniqueInput[]
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type ExamUpdateOneRequiredWithoutExamSubmissionNestedInput = {
    create?: XOR<ExamCreateWithoutExamSubmissionInput, ExamUncheckedCreateWithoutExamSubmissionInput>
    connectOrCreate?: ExamCreateOrConnectWithoutExamSubmissionInput
    upsert?: ExamUpsertWithoutExamSubmissionInput
    connect?: ExamWhereUniqueInput
    update?: XOR<XOR<ExamUpdateToOneWithWhereWithoutExamSubmissionInput, ExamUpdateWithoutExamSubmissionInput>, ExamUncheckedUpdateWithoutExamSubmissionInput>
  }

  export type UserUpdateOneRequiredWithoutExamSubmissionNestedInput = {
    create?: XOR<UserCreateWithoutExamSubmissionInput, UserUncheckedCreateWithoutExamSubmissionInput>
    connectOrCreate?: UserCreateOrConnectWithoutExamSubmissionInput
    upsert?: UserUpsertWithoutExamSubmissionInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutExamSubmissionInput, UserUpdateWithoutExamSubmissionInput>, UserUncheckedUpdateWithoutExamSubmissionInput>
  }

  export type SubmissionAnswerUpdateManyWithoutSubmissionNestedInput = {
    create?: XOR<SubmissionAnswerCreateWithoutSubmissionInput, SubmissionAnswerUncheckedCreateWithoutSubmissionInput> | SubmissionAnswerCreateWithoutSubmissionInput[] | SubmissionAnswerUncheckedCreateWithoutSubmissionInput[]
    connectOrCreate?: SubmissionAnswerCreateOrConnectWithoutSubmissionInput | SubmissionAnswerCreateOrConnectWithoutSubmissionInput[]
    upsert?: SubmissionAnswerUpsertWithWhereUniqueWithoutSubmissionInput | SubmissionAnswerUpsertWithWhereUniqueWithoutSubmissionInput[]
    createMany?: SubmissionAnswerCreateManySubmissionInputEnvelope
    set?: SubmissionAnswerWhereUniqueInput | SubmissionAnswerWhereUniqueInput[]
    disconnect?: SubmissionAnswerWhereUniqueInput | SubmissionAnswerWhereUniqueInput[]
    delete?: SubmissionAnswerWhereUniqueInput | SubmissionAnswerWhereUniqueInput[]
    connect?: SubmissionAnswerWhereUniqueInput | SubmissionAnswerWhereUniqueInput[]
    update?: SubmissionAnswerUpdateWithWhereUniqueWithoutSubmissionInput | SubmissionAnswerUpdateWithWhereUniqueWithoutSubmissionInput[]
    updateMany?: SubmissionAnswerUpdateManyWithWhereWithoutSubmissionInput | SubmissionAnswerUpdateManyWithWhereWithoutSubmissionInput[]
    deleteMany?: SubmissionAnswerScalarWhereInput | SubmissionAnswerScalarWhereInput[]
  }

  export type SubmissionAnswerUncheckedUpdateManyWithoutSubmissionNestedInput = {
    create?: XOR<SubmissionAnswerCreateWithoutSubmissionInput, SubmissionAnswerUncheckedCreateWithoutSubmissionInput> | SubmissionAnswerCreateWithoutSubmissionInput[] | SubmissionAnswerUncheckedCreateWithoutSubmissionInput[]
    connectOrCreate?: SubmissionAnswerCreateOrConnectWithoutSubmissionInput | SubmissionAnswerCreateOrConnectWithoutSubmissionInput[]
    upsert?: SubmissionAnswerUpsertWithWhereUniqueWithoutSubmissionInput | SubmissionAnswerUpsertWithWhereUniqueWithoutSubmissionInput[]
    createMany?: SubmissionAnswerCreateManySubmissionInputEnvelope
    set?: SubmissionAnswerWhereUniqueInput | SubmissionAnswerWhereUniqueInput[]
    disconnect?: SubmissionAnswerWhereUniqueInput | SubmissionAnswerWhereUniqueInput[]
    delete?: SubmissionAnswerWhereUniqueInput | SubmissionAnswerWhereUniqueInput[]
    connect?: SubmissionAnswerWhereUniqueInput | SubmissionAnswerWhereUniqueInput[]
    update?: SubmissionAnswerUpdateWithWhereUniqueWithoutSubmissionInput | SubmissionAnswerUpdateWithWhereUniqueWithoutSubmissionInput[]
    updateMany?: SubmissionAnswerUpdateManyWithWhereWithoutSubmissionInput | SubmissionAnswerUpdateManyWithWhereWithoutSubmissionInput[]
    deleteMany?: SubmissionAnswerScalarWhereInput | SubmissionAnswerScalarWhereInput[]
  }

  export type ExamSubmissionCreateNestedOneWithoutAnswersInput = {
    create?: XOR<ExamSubmissionCreateWithoutAnswersInput, ExamSubmissionUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: ExamSubmissionCreateOrConnectWithoutAnswersInput
    connect?: ExamSubmissionWhereUniqueInput
  }

  export type QuestionCreateNestedOneWithoutSubmissionAnswerInput = {
    create?: XOR<QuestionCreateWithoutSubmissionAnswerInput, QuestionUncheckedCreateWithoutSubmissionAnswerInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutSubmissionAnswerInput
    connect?: QuestionWhereUniqueInput
  }

  export type ExamSubmissionUpdateOneRequiredWithoutAnswersNestedInput = {
    create?: XOR<ExamSubmissionCreateWithoutAnswersInput, ExamSubmissionUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: ExamSubmissionCreateOrConnectWithoutAnswersInput
    upsert?: ExamSubmissionUpsertWithoutAnswersInput
    connect?: ExamSubmissionWhereUniqueInput
    update?: XOR<XOR<ExamSubmissionUpdateToOneWithWhereWithoutAnswersInput, ExamSubmissionUpdateWithoutAnswersInput>, ExamSubmissionUncheckedUpdateWithoutAnswersInput>
  }

  export type QuestionUpdateOneRequiredWithoutSubmissionAnswerNestedInput = {
    create?: XOR<QuestionCreateWithoutSubmissionAnswerInput, QuestionUncheckedCreateWithoutSubmissionAnswerInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutSubmissionAnswerInput
    upsert?: QuestionUpsertWithoutSubmissionAnswerInput
    connect?: QuestionWhereUniqueInput
    update?: XOR<XOR<QuestionUpdateToOneWithWhereWithoutSubmissionAnswerInput, QuestionUpdateWithoutSubmissionAnswerInput>, QuestionUncheckedUpdateWithoutSubmissionAnswerInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumQuestionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.QuestionType | EnumQuestionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.QuestionType[] | ListEnumQuestionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.QuestionType[] | ListEnumQuestionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumQuestionTypeFilter<$PrismaModel> | $Enums.QuestionType
  }

  export type NestedEnumQuestionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.QuestionType | EnumQuestionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.QuestionType[] | ListEnumQuestionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.QuestionType[] | ListEnumQuestionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumQuestionTypeWithAggregatesFilter<$PrismaModel> | $Enums.QuestionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumQuestionTypeFilter<$PrismaModel>
    _max?: NestedEnumQuestionTypeFilter<$PrismaModel>
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type ExamCreateWithoutAuthorInput = {
    id?: string
    title: string
    tags: string
    category: string
    duration: number
    minScore?: number | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    publishedAt?: Date | string | null
    isDeleted?: boolean
    deletedAt?: Date | string | null
    questions?: QuestionCreateNestedManyWithoutExamInput
    ExamSubmission?: ExamSubmissionCreateNestedManyWithoutExamInput
  }

  export type ExamUncheckedCreateWithoutAuthorInput = {
    id?: string
    title: string
    tags: string
    category: string
    duration: number
    minScore?: number | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    publishedAt?: Date | string | null
    isDeleted?: boolean
    deletedAt?: Date | string | null
    questions?: QuestionUncheckedCreateNestedManyWithoutExamInput
    ExamSubmission?: ExamSubmissionUncheckedCreateNestedManyWithoutExamInput
  }

  export type ExamCreateOrConnectWithoutAuthorInput = {
    where: ExamWhereUniqueInput
    create: XOR<ExamCreateWithoutAuthorInput, ExamUncheckedCreateWithoutAuthorInput>
  }

  export type ExamCreateManyAuthorInputEnvelope = {
    data: ExamCreateManyAuthorInput | ExamCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type ExamSubmissionCreateWithoutUserInput = {
    id?: string
    submittedAt?: Date | string
    expireAt: Date | string
    score?: number | null
    correct?: number | null
    incorrect?: number | null
    passed?: boolean | null
    updatedAt?: Date | string
    exam: ExamCreateNestedOneWithoutExamSubmissionInput
    answers?: SubmissionAnswerCreateNestedManyWithoutSubmissionInput
  }

  export type ExamSubmissionUncheckedCreateWithoutUserInput = {
    id?: string
    examId: string
    submittedAt?: Date | string
    expireAt: Date | string
    score?: number | null
    correct?: number | null
    incorrect?: number | null
    passed?: boolean | null
    updatedAt?: Date | string
    answers?: SubmissionAnswerUncheckedCreateNestedManyWithoutSubmissionInput
  }

  export type ExamSubmissionCreateOrConnectWithoutUserInput = {
    where: ExamSubmissionWhereUniqueInput
    create: XOR<ExamSubmissionCreateWithoutUserInput, ExamSubmissionUncheckedCreateWithoutUserInput>
  }

  export type ExamSubmissionCreateManyUserInputEnvelope = {
    data: ExamSubmissionCreateManyUserInput | ExamSubmissionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ExamUpsertWithWhereUniqueWithoutAuthorInput = {
    where: ExamWhereUniqueInput
    update: XOR<ExamUpdateWithoutAuthorInput, ExamUncheckedUpdateWithoutAuthorInput>
    create: XOR<ExamCreateWithoutAuthorInput, ExamUncheckedCreateWithoutAuthorInput>
  }

  export type ExamUpdateWithWhereUniqueWithoutAuthorInput = {
    where: ExamWhereUniqueInput
    data: XOR<ExamUpdateWithoutAuthorInput, ExamUncheckedUpdateWithoutAuthorInput>
  }

  export type ExamUpdateManyWithWhereWithoutAuthorInput = {
    where: ExamScalarWhereInput
    data: XOR<ExamUpdateManyMutationInput, ExamUncheckedUpdateManyWithoutAuthorInput>
  }

  export type ExamScalarWhereInput = {
    AND?: ExamScalarWhereInput | ExamScalarWhereInput[]
    OR?: ExamScalarWhereInput[]
    NOT?: ExamScalarWhereInput | ExamScalarWhereInput[]
    id?: StringFilter<"Exam"> | string
    title?: StringFilter<"Exam"> | string
    tags?: StringFilter<"Exam"> | string
    category?: StringFilter<"Exam"> | string
    duration?: IntFilter<"Exam"> | number
    minScore?: IntNullableFilter<"Exam"> | number | null
    description?: StringNullableFilter<"Exam"> | string | null
    createdAt?: DateTimeFilter<"Exam"> | Date | string
    updatedAt?: DateTimeFilter<"Exam"> | Date | string
    publishedAt?: DateTimeNullableFilter<"Exam"> | Date | string | null
    isDeleted?: BoolFilter<"Exam"> | boolean
    deletedAt?: DateTimeNullableFilter<"Exam"> | Date | string | null
    authorId?: StringFilter<"Exam"> | string
  }

  export type ExamSubmissionUpsertWithWhereUniqueWithoutUserInput = {
    where: ExamSubmissionWhereUniqueInput
    update: XOR<ExamSubmissionUpdateWithoutUserInput, ExamSubmissionUncheckedUpdateWithoutUserInput>
    create: XOR<ExamSubmissionCreateWithoutUserInput, ExamSubmissionUncheckedCreateWithoutUserInput>
  }

  export type ExamSubmissionUpdateWithWhereUniqueWithoutUserInput = {
    where: ExamSubmissionWhereUniqueInput
    data: XOR<ExamSubmissionUpdateWithoutUserInput, ExamSubmissionUncheckedUpdateWithoutUserInput>
  }

  export type ExamSubmissionUpdateManyWithWhereWithoutUserInput = {
    where: ExamSubmissionScalarWhereInput
    data: XOR<ExamSubmissionUpdateManyMutationInput, ExamSubmissionUncheckedUpdateManyWithoutUserInput>
  }

  export type ExamSubmissionScalarWhereInput = {
    AND?: ExamSubmissionScalarWhereInput | ExamSubmissionScalarWhereInput[]
    OR?: ExamSubmissionScalarWhereInput[]
    NOT?: ExamSubmissionScalarWhereInput | ExamSubmissionScalarWhereInput[]
    id?: StringFilter<"ExamSubmission"> | string
    examId?: StringFilter<"ExamSubmission"> | string
    userId?: StringFilter<"ExamSubmission"> | string
    submittedAt?: DateTimeFilter<"ExamSubmission"> | Date | string
    expireAt?: DateTimeFilter<"ExamSubmission"> | Date | string
    score?: IntNullableFilter<"ExamSubmission"> | number | null
    correct?: IntNullableFilter<"ExamSubmission"> | number | null
    incorrect?: IntNullableFilter<"ExamSubmission"> | number | null
    passed?: BoolNullableFilter<"ExamSubmission"> | boolean | null
    updatedAt?: DateTimeFilter<"ExamSubmission"> | Date | string
  }

  export type UserCreateWithoutExamInput = {
    id?: string
    fullName: string
    email: string
    purpose: string
    institution: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    ExamSubmission?: ExamSubmissionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutExamInput = {
    id?: string
    fullName: string
    email: string
    purpose: string
    institution: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    ExamSubmission?: ExamSubmissionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutExamInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutExamInput, UserUncheckedCreateWithoutExamInput>
  }

  export type QuestionCreateWithoutExamInput = {
    id?: string
    title: string
    image?: string | null
    imageLabel?: string | null
    type: $Enums.QuestionType
    createdAt?: Date | string
    correctAnswerIndex?: number | null
    answers?: AnswerCreateNestedManyWithoutQuestionInput
    SubmissionAnswer?: SubmissionAnswerCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutExamInput = {
    id?: string
    title: string
    image?: string | null
    imageLabel?: string | null
    type: $Enums.QuestionType
    createdAt?: Date | string
    correctAnswerIndex?: number | null
    answers?: AnswerUncheckedCreateNestedManyWithoutQuestionInput
    SubmissionAnswer?: SubmissionAnswerUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutExamInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutExamInput, QuestionUncheckedCreateWithoutExamInput>
  }

  export type QuestionCreateManyExamInputEnvelope = {
    data: QuestionCreateManyExamInput | QuestionCreateManyExamInput[]
    skipDuplicates?: boolean
  }

  export type ExamSubmissionCreateWithoutExamInput = {
    id?: string
    submittedAt?: Date | string
    expireAt: Date | string
    score?: number | null
    correct?: number | null
    incorrect?: number | null
    passed?: boolean | null
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutExamSubmissionInput
    answers?: SubmissionAnswerCreateNestedManyWithoutSubmissionInput
  }

  export type ExamSubmissionUncheckedCreateWithoutExamInput = {
    id?: string
    userId: string
    submittedAt?: Date | string
    expireAt: Date | string
    score?: number | null
    correct?: number | null
    incorrect?: number | null
    passed?: boolean | null
    updatedAt?: Date | string
    answers?: SubmissionAnswerUncheckedCreateNestedManyWithoutSubmissionInput
  }

  export type ExamSubmissionCreateOrConnectWithoutExamInput = {
    where: ExamSubmissionWhereUniqueInput
    create: XOR<ExamSubmissionCreateWithoutExamInput, ExamSubmissionUncheckedCreateWithoutExamInput>
  }

  export type ExamSubmissionCreateManyExamInputEnvelope = {
    data: ExamSubmissionCreateManyExamInput | ExamSubmissionCreateManyExamInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutExamInput = {
    update: XOR<UserUpdateWithoutExamInput, UserUncheckedUpdateWithoutExamInput>
    create: XOR<UserCreateWithoutExamInput, UserUncheckedCreateWithoutExamInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutExamInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutExamInput, UserUncheckedUpdateWithoutExamInput>
  }

  export type UserUpdateWithoutExamInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    purpose?: StringFieldUpdateOperationsInput | string
    institution?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ExamSubmission?: ExamSubmissionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutExamInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    purpose?: StringFieldUpdateOperationsInput | string
    institution?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ExamSubmission?: ExamSubmissionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type QuestionUpsertWithWhereUniqueWithoutExamInput = {
    where: QuestionWhereUniqueInput
    update: XOR<QuestionUpdateWithoutExamInput, QuestionUncheckedUpdateWithoutExamInput>
    create: XOR<QuestionCreateWithoutExamInput, QuestionUncheckedCreateWithoutExamInput>
  }

  export type QuestionUpdateWithWhereUniqueWithoutExamInput = {
    where: QuestionWhereUniqueInput
    data: XOR<QuestionUpdateWithoutExamInput, QuestionUncheckedUpdateWithoutExamInput>
  }

  export type QuestionUpdateManyWithWhereWithoutExamInput = {
    where: QuestionScalarWhereInput
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyWithoutExamInput>
  }

  export type QuestionScalarWhereInput = {
    AND?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
    OR?: QuestionScalarWhereInput[]
    NOT?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
    id?: StringFilter<"Question"> | string
    title?: StringFilter<"Question"> | string
    image?: StringNullableFilter<"Question"> | string | null
    imageLabel?: StringNullableFilter<"Question"> | string | null
    type?: EnumQuestionTypeFilter<"Question"> | $Enums.QuestionType
    examId?: StringFilter<"Question"> | string
    createdAt?: DateTimeFilter<"Question"> | Date | string
    correctAnswerIndex?: IntNullableFilter<"Question"> | number | null
  }

  export type ExamSubmissionUpsertWithWhereUniqueWithoutExamInput = {
    where: ExamSubmissionWhereUniqueInput
    update: XOR<ExamSubmissionUpdateWithoutExamInput, ExamSubmissionUncheckedUpdateWithoutExamInput>
    create: XOR<ExamSubmissionCreateWithoutExamInput, ExamSubmissionUncheckedCreateWithoutExamInput>
  }

  export type ExamSubmissionUpdateWithWhereUniqueWithoutExamInput = {
    where: ExamSubmissionWhereUniqueInput
    data: XOR<ExamSubmissionUpdateWithoutExamInput, ExamSubmissionUncheckedUpdateWithoutExamInput>
  }

  export type ExamSubmissionUpdateManyWithWhereWithoutExamInput = {
    where: ExamSubmissionScalarWhereInput
    data: XOR<ExamSubmissionUpdateManyMutationInput, ExamSubmissionUncheckedUpdateManyWithoutExamInput>
  }

  export type ExamCreateWithoutQuestionsInput = {
    id?: string
    title: string
    tags: string
    category: string
    duration: number
    minScore?: number | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    publishedAt?: Date | string | null
    isDeleted?: boolean
    deletedAt?: Date | string | null
    author: UserCreateNestedOneWithoutExamInput
    ExamSubmission?: ExamSubmissionCreateNestedManyWithoutExamInput
  }

  export type ExamUncheckedCreateWithoutQuestionsInput = {
    id?: string
    title: string
    tags: string
    category: string
    duration: number
    minScore?: number | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    publishedAt?: Date | string | null
    isDeleted?: boolean
    deletedAt?: Date | string | null
    authorId: string
    ExamSubmission?: ExamSubmissionUncheckedCreateNestedManyWithoutExamInput
  }

  export type ExamCreateOrConnectWithoutQuestionsInput = {
    where: ExamWhereUniqueInput
    create: XOR<ExamCreateWithoutQuestionsInput, ExamUncheckedCreateWithoutQuestionsInput>
  }

  export type AnswerCreateWithoutQuestionInput = {
    id?: string
    answerText: string
    isCorrect: boolean
  }

  export type AnswerUncheckedCreateWithoutQuestionInput = {
    id?: string
    answerText: string
    isCorrect: boolean
  }

  export type AnswerCreateOrConnectWithoutQuestionInput = {
    where: AnswerWhereUniqueInput
    create: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput>
  }

  export type AnswerCreateManyQuestionInputEnvelope = {
    data: AnswerCreateManyQuestionInput | AnswerCreateManyQuestionInput[]
    skipDuplicates?: boolean
  }

  export type SubmissionAnswerCreateWithoutQuestionInput = {
    id?: string
    selectedAnswerIds: string
    submission: ExamSubmissionCreateNestedOneWithoutAnswersInput
  }

  export type SubmissionAnswerUncheckedCreateWithoutQuestionInput = {
    id?: string
    submissionId: string
    selectedAnswerIds: string
  }

  export type SubmissionAnswerCreateOrConnectWithoutQuestionInput = {
    where: SubmissionAnswerWhereUniqueInput
    create: XOR<SubmissionAnswerCreateWithoutQuestionInput, SubmissionAnswerUncheckedCreateWithoutQuestionInput>
  }

  export type SubmissionAnswerCreateManyQuestionInputEnvelope = {
    data: SubmissionAnswerCreateManyQuestionInput | SubmissionAnswerCreateManyQuestionInput[]
    skipDuplicates?: boolean
  }

  export type ExamUpsertWithoutQuestionsInput = {
    update: XOR<ExamUpdateWithoutQuestionsInput, ExamUncheckedUpdateWithoutQuestionsInput>
    create: XOR<ExamCreateWithoutQuestionsInput, ExamUncheckedCreateWithoutQuestionsInput>
    where?: ExamWhereInput
  }

  export type ExamUpdateToOneWithWhereWithoutQuestionsInput = {
    where?: ExamWhereInput
    data: XOR<ExamUpdateWithoutQuestionsInput, ExamUncheckedUpdateWithoutQuestionsInput>
  }

  export type ExamUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    minScore?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    author?: UserUpdateOneRequiredWithoutExamNestedInput
    ExamSubmission?: ExamSubmissionUpdateManyWithoutExamNestedInput
  }

  export type ExamUncheckedUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    minScore?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    authorId?: StringFieldUpdateOperationsInput | string
    ExamSubmission?: ExamSubmissionUncheckedUpdateManyWithoutExamNestedInput
  }

  export type AnswerUpsertWithWhereUniqueWithoutQuestionInput = {
    where: AnswerWhereUniqueInput
    update: XOR<AnswerUpdateWithoutQuestionInput, AnswerUncheckedUpdateWithoutQuestionInput>
    create: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput>
  }

  export type AnswerUpdateWithWhereUniqueWithoutQuestionInput = {
    where: AnswerWhereUniqueInput
    data: XOR<AnswerUpdateWithoutQuestionInput, AnswerUncheckedUpdateWithoutQuestionInput>
  }

  export type AnswerUpdateManyWithWhereWithoutQuestionInput = {
    where: AnswerScalarWhereInput
    data: XOR<AnswerUpdateManyMutationInput, AnswerUncheckedUpdateManyWithoutQuestionInput>
  }

  export type AnswerScalarWhereInput = {
    AND?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
    OR?: AnswerScalarWhereInput[]
    NOT?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
    id?: StringFilter<"Answer"> | string
    answerText?: StringFilter<"Answer"> | string
    isCorrect?: BoolFilter<"Answer"> | boolean
    questionId?: StringFilter<"Answer"> | string
  }

  export type SubmissionAnswerUpsertWithWhereUniqueWithoutQuestionInput = {
    where: SubmissionAnswerWhereUniqueInput
    update: XOR<SubmissionAnswerUpdateWithoutQuestionInput, SubmissionAnswerUncheckedUpdateWithoutQuestionInput>
    create: XOR<SubmissionAnswerCreateWithoutQuestionInput, SubmissionAnswerUncheckedCreateWithoutQuestionInput>
  }

  export type SubmissionAnswerUpdateWithWhereUniqueWithoutQuestionInput = {
    where: SubmissionAnswerWhereUniqueInput
    data: XOR<SubmissionAnswerUpdateWithoutQuestionInput, SubmissionAnswerUncheckedUpdateWithoutQuestionInput>
  }

  export type SubmissionAnswerUpdateManyWithWhereWithoutQuestionInput = {
    where: SubmissionAnswerScalarWhereInput
    data: XOR<SubmissionAnswerUpdateManyMutationInput, SubmissionAnswerUncheckedUpdateManyWithoutQuestionInput>
  }

  export type SubmissionAnswerScalarWhereInput = {
    AND?: SubmissionAnswerScalarWhereInput | SubmissionAnswerScalarWhereInput[]
    OR?: SubmissionAnswerScalarWhereInput[]
    NOT?: SubmissionAnswerScalarWhereInput | SubmissionAnswerScalarWhereInput[]
    id?: StringFilter<"SubmissionAnswer"> | string
    submissionId?: StringFilter<"SubmissionAnswer"> | string
    questionId?: StringFilter<"SubmissionAnswer"> | string
    selectedAnswerIds?: StringFilter<"SubmissionAnswer"> | string
  }

  export type QuestionCreateWithoutAnswersInput = {
    id?: string
    title: string
    image?: string | null
    imageLabel?: string | null
    type: $Enums.QuestionType
    createdAt?: Date | string
    correctAnswerIndex?: number | null
    exam: ExamCreateNestedOneWithoutQuestionsInput
    SubmissionAnswer?: SubmissionAnswerCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutAnswersInput = {
    id?: string
    title: string
    image?: string | null
    imageLabel?: string | null
    type: $Enums.QuestionType
    examId: string
    createdAt?: Date | string
    correctAnswerIndex?: number | null
    SubmissionAnswer?: SubmissionAnswerUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutAnswersInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutAnswersInput, QuestionUncheckedCreateWithoutAnswersInput>
  }

  export type QuestionUpsertWithoutAnswersInput = {
    update: XOR<QuestionUpdateWithoutAnswersInput, QuestionUncheckedUpdateWithoutAnswersInput>
    create: XOR<QuestionCreateWithoutAnswersInput, QuestionUncheckedCreateWithoutAnswersInput>
    where?: QuestionWhereInput
  }

  export type QuestionUpdateToOneWithWhereWithoutAnswersInput = {
    where?: QuestionWhereInput
    data: XOR<QuestionUpdateWithoutAnswersInput, QuestionUncheckedUpdateWithoutAnswersInput>
  }

  export type QuestionUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    imageLabel?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    correctAnswerIndex?: NullableIntFieldUpdateOperationsInput | number | null
    exam?: ExamUpdateOneRequiredWithoutQuestionsNestedInput
    SubmissionAnswer?: SubmissionAnswerUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    imageLabel?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    examId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    correctAnswerIndex?: NullableIntFieldUpdateOperationsInput | number | null
    SubmissionAnswer?: SubmissionAnswerUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type ExamCreateWithoutExamSubmissionInput = {
    id?: string
    title: string
    tags: string
    category: string
    duration: number
    minScore?: number | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    publishedAt?: Date | string | null
    isDeleted?: boolean
    deletedAt?: Date | string | null
    author: UserCreateNestedOneWithoutExamInput
    questions?: QuestionCreateNestedManyWithoutExamInput
  }

  export type ExamUncheckedCreateWithoutExamSubmissionInput = {
    id?: string
    title: string
    tags: string
    category: string
    duration: number
    minScore?: number | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    publishedAt?: Date | string | null
    isDeleted?: boolean
    deletedAt?: Date | string | null
    authorId: string
    questions?: QuestionUncheckedCreateNestedManyWithoutExamInput
  }

  export type ExamCreateOrConnectWithoutExamSubmissionInput = {
    where: ExamWhereUniqueInput
    create: XOR<ExamCreateWithoutExamSubmissionInput, ExamUncheckedCreateWithoutExamSubmissionInput>
  }

  export type UserCreateWithoutExamSubmissionInput = {
    id?: string
    fullName: string
    email: string
    purpose: string
    institution: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    Exam?: ExamCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateWithoutExamSubmissionInput = {
    id?: string
    fullName: string
    email: string
    purpose: string
    institution: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    Exam?: ExamUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutExamSubmissionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutExamSubmissionInput, UserUncheckedCreateWithoutExamSubmissionInput>
  }

  export type SubmissionAnswerCreateWithoutSubmissionInput = {
    id?: string
    selectedAnswerIds: string
    question: QuestionCreateNestedOneWithoutSubmissionAnswerInput
  }

  export type SubmissionAnswerUncheckedCreateWithoutSubmissionInput = {
    id?: string
    questionId: string
    selectedAnswerIds: string
  }

  export type SubmissionAnswerCreateOrConnectWithoutSubmissionInput = {
    where: SubmissionAnswerWhereUniqueInput
    create: XOR<SubmissionAnswerCreateWithoutSubmissionInput, SubmissionAnswerUncheckedCreateWithoutSubmissionInput>
  }

  export type SubmissionAnswerCreateManySubmissionInputEnvelope = {
    data: SubmissionAnswerCreateManySubmissionInput | SubmissionAnswerCreateManySubmissionInput[]
    skipDuplicates?: boolean
  }

  export type ExamUpsertWithoutExamSubmissionInput = {
    update: XOR<ExamUpdateWithoutExamSubmissionInput, ExamUncheckedUpdateWithoutExamSubmissionInput>
    create: XOR<ExamCreateWithoutExamSubmissionInput, ExamUncheckedCreateWithoutExamSubmissionInput>
    where?: ExamWhereInput
  }

  export type ExamUpdateToOneWithWhereWithoutExamSubmissionInput = {
    where?: ExamWhereInput
    data: XOR<ExamUpdateWithoutExamSubmissionInput, ExamUncheckedUpdateWithoutExamSubmissionInput>
  }

  export type ExamUpdateWithoutExamSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    minScore?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    author?: UserUpdateOneRequiredWithoutExamNestedInput
    questions?: QuestionUpdateManyWithoutExamNestedInput
  }

  export type ExamUncheckedUpdateWithoutExamSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    minScore?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    authorId?: StringFieldUpdateOperationsInput | string
    questions?: QuestionUncheckedUpdateManyWithoutExamNestedInput
  }

  export type UserUpsertWithoutExamSubmissionInput = {
    update: XOR<UserUpdateWithoutExamSubmissionInput, UserUncheckedUpdateWithoutExamSubmissionInput>
    create: XOR<UserCreateWithoutExamSubmissionInput, UserUncheckedCreateWithoutExamSubmissionInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutExamSubmissionInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutExamSubmissionInput, UserUncheckedUpdateWithoutExamSubmissionInput>
  }

  export type UserUpdateWithoutExamSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    purpose?: StringFieldUpdateOperationsInput | string
    institution?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Exam?: ExamUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateWithoutExamSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    purpose?: StringFieldUpdateOperationsInput | string
    institution?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Exam?: ExamUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type SubmissionAnswerUpsertWithWhereUniqueWithoutSubmissionInput = {
    where: SubmissionAnswerWhereUniqueInput
    update: XOR<SubmissionAnswerUpdateWithoutSubmissionInput, SubmissionAnswerUncheckedUpdateWithoutSubmissionInput>
    create: XOR<SubmissionAnswerCreateWithoutSubmissionInput, SubmissionAnswerUncheckedCreateWithoutSubmissionInput>
  }

  export type SubmissionAnswerUpdateWithWhereUniqueWithoutSubmissionInput = {
    where: SubmissionAnswerWhereUniqueInput
    data: XOR<SubmissionAnswerUpdateWithoutSubmissionInput, SubmissionAnswerUncheckedUpdateWithoutSubmissionInput>
  }

  export type SubmissionAnswerUpdateManyWithWhereWithoutSubmissionInput = {
    where: SubmissionAnswerScalarWhereInput
    data: XOR<SubmissionAnswerUpdateManyMutationInput, SubmissionAnswerUncheckedUpdateManyWithoutSubmissionInput>
  }

  export type ExamSubmissionCreateWithoutAnswersInput = {
    id?: string
    submittedAt?: Date | string
    expireAt: Date | string
    score?: number | null
    correct?: number | null
    incorrect?: number | null
    passed?: boolean | null
    updatedAt?: Date | string
    exam: ExamCreateNestedOneWithoutExamSubmissionInput
    user: UserCreateNestedOneWithoutExamSubmissionInput
  }

  export type ExamSubmissionUncheckedCreateWithoutAnswersInput = {
    id?: string
    examId: string
    userId: string
    submittedAt?: Date | string
    expireAt: Date | string
    score?: number | null
    correct?: number | null
    incorrect?: number | null
    passed?: boolean | null
    updatedAt?: Date | string
  }

  export type ExamSubmissionCreateOrConnectWithoutAnswersInput = {
    where: ExamSubmissionWhereUniqueInput
    create: XOR<ExamSubmissionCreateWithoutAnswersInput, ExamSubmissionUncheckedCreateWithoutAnswersInput>
  }

  export type QuestionCreateWithoutSubmissionAnswerInput = {
    id?: string
    title: string
    image?: string | null
    imageLabel?: string | null
    type: $Enums.QuestionType
    createdAt?: Date | string
    correctAnswerIndex?: number | null
    exam: ExamCreateNestedOneWithoutQuestionsInput
    answers?: AnswerCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutSubmissionAnswerInput = {
    id?: string
    title: string
    image?: string | null
    imageLabel?: string | null
    type: $Enums.QuestionType
    examId: string
    createdAt?: Date | string
    correctAnswerIndex?: number | null
    answers?: AnswerUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutSubmissionAnswerInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutSubmissionAnswerInput, QuestionUncheckedCreateWithoutSubmissionAnswerInput>
  }

  export type ExamSubmissionUpsertWithoutAnswersInput = {
    update: XOR<ExamSubmissionUpdateWithoutAnswersInput, ExamSubmissionUncheckedUpdateWithoutAnswersInput>
    create: XOR<ExamSubmissionCreateWithoutAnswersInput, ExamSubmissionUncheckedCreateWithoutAnswersInput>
    where?: ExamSubmissionWhereInput
  }

  export type ExamSubmissionUpdateToOneWithWhereWithoutAnswersInput = {
    where?: ExamSubmissionWhereInput
    data: XOR<ExamSubmissionUpdateWithoutAnswersInput, ExamSubmissionUncheckedUpdateWithoutAnswersInput>
  }

  export type ExamSubmissionUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expireAt?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: NullableIntFieldUpdateOperationsInput | number | null
    correct?: NullableIntFieldUpdateOperationsInput | number | null
    incorrect?: NullableIntFieldUpdateOperationsInput | number | null
    passed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exam?: ExamUpdateOneRequiredWithoutExamSubmissionNestedInput
    user?: UserUpdateOneRequiredWithoutExamSubmissionNestedInput
  }

  export type ExamSubmissionUncheckedUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    examId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expireAt?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: NullableIntFieldUpdateOperationsInput | number | null
    correct?: NullableIntFieldUpdateOperationsInput | number | null
    incorrect?: NullableIntFieldUpdateOperationsInput | number | null
    passed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionUpsertWithoutSubmissionAnswerInput = {
    update: XOR<QuestionUpdateWithoutSubmissionAnswerInput, QuestionUncheckedUpdateWithoutSubmissionAnswerInput>
    create: XOR<QuestionCreateWithoutSubmissionAnswerInput, QuestionUncheckedCreateWithoutSubmissionAnswerInput>
    where?: QuestionWhereInput
  }

  export type QuestionUpdateToOneWithWhereWithoutSubmissionAnswerInput = {
    where?: QuestionWhereInput
    data: XOR<QuestionUpdateWithoutSubmissionAnswerInput, QuestionUncheckedUpdateWithoutSubmissionAnswerInput>
  }

  export type QuestionUpdateWithoutSubmissionAnswerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    imageLabel?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    correctAnswerIndex?: NullableIntFieldUpdateOperationsInput | number | null
    exam?: ExamUpdateOneRequiredWithoutQuestionsNestedInput
    answers?: AnswerUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutSubmissionAnswerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    imageLabel?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    examId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    correctAnswerIndex?: NullableIntFieldUpdateOperationsInput | number | null
    answers?: AnswerUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type ExamCreateManyAuthorInput = {
    id?: string
    title: string
    tags: string
    category: string
    duration: number
    minScore?: number | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    publishedAt?: Date | string | null
    isDeleted?: boolean
    deletedAt?: Date | string | null
  }

  export type ExamSubmissionCreateManyUserInput = {
    id?: string
    examId: string
    submittedAt?: Date | string
    expireAt: Date | string
    score?: number | null
    correct?: number | null
    incorrect?: number | null
    passed?: boolean | null
    updatedAt?: Date | string
  }

  export type ExamUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    minScore?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    questions?: QuestionUpdateManyWithoutExamNestedInput
    ExamSubmission?: ExamSubmissionUpdateManyWithoutExamNestedInput
  }

  export type ExamUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    minScore?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    questions?: QuestionUncheckedUpdateManyWithoutExamNestedInput
    ExamSubmission?: ExamSubmissionUncheckedUpdateManyWithoutExamNestedInput
  }

  export type ExamUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    minScore?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ExamSubmissionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expireAt?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: NullableIntFieldUpdateOperationsInput | number | null
    correct?: NullableIntFieldUpdateOperationsInput | number | null
    incorrect?: NullableIntFieldUpdateOperationsInput | number | null
    passed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exam?: ExamUpdateOneRequiredWithoutExamSubmissionNestedInput
    answers?: SubmissionAnswerUpdateManyWithoutSubmissionNestedInput
  }

  export type ExamSubmissionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    examId?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expireAt?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: NullableIntFieldUpdateOperationsInput | number | null
    correct?: NullableIntFieldUpdateOperationsInput | number | null
    incorrect?: NullableIntFieldUpdateOperationsInput | number | null
    passed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: SubmissionAnswerUncheckedUpdateManyWithoutSubmissionNestedInput
  }

  export type ExamSubmissionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    examId?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expireAt?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: NullableIntFieldUpdateOperationsInput | number | null
    correct?: NullableIntFieldUpdateOperationsInput | number | null
    incorrect?: NullableIntFieldUpdateOperationsInput | number | null
    passed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionCreateManyExamInput = {
    id?: string
    title: string
    image?: string | null
    imageLabel?: string | null
    type: $Enums.QuestionType
    createdAt?: Date | string
    correctAnswerIndex?: number | null
  }

  export type ExamSubmissionCreateManyExamInput = {
    id?: string
    userId: string
    submittedAt?: Date | string
    expireAt: Date | string
    score?: number | null
    correct?: number | null
    incorrect?: number | null
    passed?: boolean | null
    updatedAt?: Date | string
  }

  export type QuestionUpdateWithoutExamInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    imageLabel?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    correctAnswerIndex?: NullableIntFieldUpdateOperationsInput | number | null
    answers?: AnswerUpdateManyWithoutQuestionNestedInput
    SubmissionAnswer?: SubmissionAnswerUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutExamInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    imageLabel?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    correctAnswerIndex?: NullableIntFieldUpdateOperationsInput | number | null
    answers?: AnswerUncheckedUpdateManyWithoutQuestionNestedInput
    SubmissionAnswer?: SubmissionAnswerUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateManyWithoutExamInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    imageLabel?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    correctAnswerIndex?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ExamSubmissionUpdateWithoutExamInput = {
    id?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expireAt?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: NullableIntFieldUpdateOperationsInput | number | null
    correct?: NullableIntFieldUpdateOperationsInput | number | null
    incorrect?: NullableIntFieldUpdateOperationsInput | number | null
    passed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutExamSubmissionNestedInput
    answers?: SubmissionAnswerUpdateManyWithoutSubmissionNestedInput
  }

  export type ExamSubmissionUncheckedUpdateWithoutExamInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expireAt?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: NullableIntFieldUpdateOperationsInput | number | null
    correct?: NullableIntFieldUpdateOperationsInput | number | null
    incorrect?: NullableIntFieldUpdateOperationsInput | number | null
    passed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: SubmissionAnswerUncheckedUpdateManyWithoutSubmissionNestedInput
  }

  export type ExamSubmissionUncheckedUpdateManyWithoutExamInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expireAt?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: NullableIntFieldUpdateOperationsInput | number | null
    correct?: NullableIntFieldUpdateOperationsInput | number | null
    incorrect?: NullableIntFieldUpdateOperationsInput | number | null
    passed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnswerCreateManyQuestionInput = {
    id?: string
    answerText: string
    isCorrect: boolean
  }

  export type SubmissionAnswerCreateManyQuestionInput = {
    id?: string
    submissionId: string
    selectedAnswerIds: string
  }

  export type AnswerUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    answerText?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AnswerUncheckedUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    answerText?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AnswerUncheckedUpdateManyWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    answerText?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SubmissionAnswerUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    selectedAnswerIds?: StringFieldUpdateOperationsInput | string
    submission?: ExamSubmissionUpdateOneRequiredWithoutAnswersNestedInput
  }

  export type SubmissionAnswerUncheckedUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    submissionId?: StringFieldUpdateOperationsInput | string
    selectedAnswerIds?: StringFieldUpdateOperationsInput | string
  }

  export type SubmissionAnswerUncheckedUpdateManyWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    submissionId?: StringFieldUpdateOperationsInput | string
    selectedAnswerIds?: StringFieldUpdateOperationsInput | string
  }

  export type SubmissionAnswerCreateManySubmissionInput = {
    id?: string
    questionId: string
    selectedAnswerIds: string
  }

  export type SubmissionAnswerUpdateWithoutSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    selectedAnswerIds?: StringFieldUpdateOperationsInput | string
    question?: QuestionUpdateOneRequiredWithoutSubmissionAnswerNestedInput
  }

  export type SubmissionAnswerUncheckedUpdateWithoutSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    selectedAnswerIds?: StringFieldUpdateOperationsInput | string
  }

  export type SubmissionAnswerUncheckedUpdateManyWithoutSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    selectedAnswerIds?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}