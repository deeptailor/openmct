/*****************************************************************************
 * Open MCT, Copyright (c) 2014-2022, United States Government
 * as represented by the Administrator of the National Aeronautics and Space
 * Administration. All rights reserved.
 *
 * Open MCT is licensed under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0.
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 *
 * Open MCT includes source code licensed under additional open source
 * licenses. See the Open Source Licenses file (LICENSES.md) included with
 * this source code distribution or the Licensing information page available
 * at runtime from the About dialog for additional information.
 *****************************************************************************/

define(
    [],
    function () {

        /**
         * A capability that implements an editing 'session' for a domain
         * object. An editing session is initiated via a call to .edit().
         * Once initiated, any persist operations will be queued pending a
         * subsequent call to [.save()](@link #save) or [.finish()](@link
         * #finish).
         * @param domainObject
         * @constructor
         */
        function EditorCapability(
            openmct,
            domainObject
        ) {
            this.openmct = openmct;
            this.domainObject = domainObject;
        }

        /**
         * Determines whether this object, or any of its ancestors are
         * currently being edited.
         * @returns boolean
         */
        EditorCapability.prototype.inEditContext = function () {
            return this.openmct.editor.isEditing();
        };

        /**
         * Is this the root editing object (ie. the object that the user
         * clicked 'edit' on)?
         * @returns {*}
         */
        EditorCapability.prototype.isEditContextRoot = function () {
            return this.openmct.editor.isEditing();
        };

        return EditorCapability;
    }
);
