import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Posts {
  readonly id: string;
  readonly text?: string;
  readonly authorsID: string;
  constructor(init: ModelInit<Posts>);
  static copyOf(source: Posts, mutator: (draft: MutableModel<Posts>) => MutableModel<Posts> | void): Posts;
}

export declare class Authors {
  readonly id: string;
  readonly frist_name?: string;
  readonly last_name?: string;
  readonly Posts?: (Posts | null)[];
  constructor(init: ModelInit<Authors>);
  static copyOf(source: Authors, mutator: (draft: MutableModel<Authors>) => MutableModel<Authors> | void): Authors;
}