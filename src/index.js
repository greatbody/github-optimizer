// eslint-disable-next-line
(function () {
  // eslint-disable-next-line
  'use strict';
  function regenGit(gitUrl) {
    const matches = /git@github.com:(.*)\/(.*)/ig.exec(gitUrl);
    if (matches.length !== 3) {
      throw new Error('git url error');
    }
    const gitOwner = matches[1];
    const gitRepo = matches[2];
    if (gitOwner.indexOf('planetfitness') >= 0) {
      return `git@rsun:${gitOwner}/${gitRepo}`;
    }
    if (gitOwner.indexOf('great-') >= 0 || gitOwner.indexOf('greatbody') >= 0) {
      return `git@greatbody:${gitOwner}/${gitRepo}`;
    }
    return gitUrl;
  }

  const sshCopyBtn = document.querySelector('.ssh-clone-options clipboard-copy');
  if (sshCopyBtn) {
    let sshUrl = sshCopyBtn.getAttribute('value');
    sshUrl = regenGit(sshUrl);
    sshCopyBtn.setAttribute('value', sshUrl);
    document.querySelector('.ssh-clone-options .form-control').setAttribute('value', sshUrl);
  }

  const emptySetupSSH = document.querySelector('#empty-setup-clone-url');
  if (emptySetupSSH) {
    let sshUrl = emptySetupSSH.getAttribute('value');
    sshUrl = regenGit(sshUrl);
    emptySetupSSH.setAttribute('value', sshUrl);
  }
  // eslint-disable-next-line
}());
