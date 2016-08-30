export * from './expandablearea.component'
export * from './expandablearea.module';

/**
 * Interface for the jQuery event emitted
 */
export interface ExpandableAreaEvent {
  currentTarget: HTMLElement;
  data: any;
  delegateTarget: HTMLElement;
  handleObj: Object;
  isTrigger: number;
  namespace: string;
  result: any;
  rnamespace: any;
  target: HTMLElement;
  timeStamp: number;
  type: string;
}
