/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// TODO figure out what is wrong with the types...
import { onSnapshot, DocumentReference, DocumentData, SnapshotListenOptions, Query, DocumentSnapshot, QuerySnapshot } from '@firebase/firestore';
import { Observable } from 'rxjs';

/* eslint-disable @typescript-eslint/no-explicit-any */
export function fromRef<T=DocumentData>(ref: DocumentReference<T>, options?: SnapshotListenOptions): Observable<DocumentSnapshot<T>>;
export function fromRef<T=DocumentData>(red: Query<T>, options?: SnapshotListenOptions): Observable<QuerySnapshot<T>>;
export function fromRef(
  ref: any,
  options: SnapshotListenOptions | undefined
): Observable<any> {
  /* eslint-enable @typescript-eslint/no-explicit-any */
  return new Observable(subscriber => {
    const unsubscribe = onSnapshot(ref, options || {}, subscriber);
    return { unsubscribe };
  });
}
