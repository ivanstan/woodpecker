import React from 'react';

export function Copyright() {
  return <span>Copyright © {window.location.hostname} {new Date().getFullYear()}</span>
}
