import React from "react";
import { PageFooterHyperlink } from "./page-footer-hyperlink";

export const PageFooter = () => {
  const resourceList = [
    {
      path: "https://xonnections.com/why-xconnections/",
      label: "Why X Connections",
    },
    {
      path: "https://xconnections.com/docs/get-started",
      label: "How It Works",
    },
    {
      path: "https://xconnections.com/blog/developers/",
      label: "Developer Blog",
    },
    {
      path: "https://xconnections.com/contact-us",
      label: "Contact an Expert",
    },
  ];

  return (
    <footer className="page-footer">
      <div className="page-footer-grid">
        <div className="page-footer-grid__info">
          <div className="page-footer-info__message">
            <p className="page-footer-message__headline">
              <span>This sample application is brought to you by&nbsp;</span>
              <PageFooterHyperlink path="https://xconnections.com/">
                X Connections
              </PageFooterHyperlink>
            </p>
            <p className="page-footer-message__description">
              <PageFooterHyperlink path="https://xconnections.com/docs/quickstarts/">
                <span>
                  Securely find partners using X Connections on any platform&nbsp;
                </span>
                <u>in less than X minutes</u>
              </PageFooterHyperlink>
            </p>
          </div>
          <div className="page-footer-info__button">
            <a
              id="create-account-button"
              className="button button--secondary"
              // href="https://xconnections.com/signup"
              href="https://dev-alid2dkjx0p0bbb5.us.xconnections.com/u/signup?state=hKFo2SAtb3VJT3I1bVl6ZHVCc0xSdU5WdDl1bFJBOTB6UTM2MqFur3VuaXZlcnNhbC1sb2dpbqN0aWTZIEZRYkZRRFl6aERBTE05STlzQndlUmNCVTlpVmhvbS1So2NpZNkgSDA1c1pidmlqeEV6RzBEaEdwWDJ5SG00Z2FFUlMxM1M"
              target="_blank"
              rel="noreferrer noopener"
            >
              Create Free X Connections Account
            </a>
          </div>
          <div className="page-footer-info__resource-list">
            {resourceList.map((resource) => (
              <div
                key={resource.path}
                className="page-footer-info__resource-list-item"
              >
                <PageFooterHyperlink path={resource.path}>
                  {resource.label}
                </PageFooterHyperlink>
              </div>
            ))}
          </div>
        </div>
        <div className="page-footer-grid__brand">
          <div className="page-footer-brand">
            <img
              className="page-footer-brand__logo"
              src="https://cdn.xconnections.com/blog/hello-xconnections/xconnections-shield.svg"
              alt="xconnections"
              width="20"
              height="22.22"
            />
            <PageFooterHyperlink path="http://www.xconnections.com">
              X Connections
            </PageFooterHyperlink>
          </div>
        </div>
      </div>
    </footer>
  );
};