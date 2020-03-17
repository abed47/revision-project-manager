import React from 'react';
import { firebase } from '../firebase';
export const Checkbox = ({id}) => {
    const archiveTaks = () => {
        firebase
        .firestore()
        .collection('tasks')
        .doc(id)
        .update({
            archived: true,
        });
    }
    
    return (
        <div className="checkbox-holder"
        data-testid="checkbox-action"
        onClick={() => archiveTaks()}>
            <span className="checkbox"/>
        </div>
    )
}