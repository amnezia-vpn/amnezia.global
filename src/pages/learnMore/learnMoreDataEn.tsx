import TextLink from '@src/shared/ui/TextLink/TextLink';

const faqDataRu = [
  {
    label: 'Is Amnezia a VPN service?',
    content:
      'No Amnezia is not a VPN service, it is a VPN client with the help of which you will be able to set up your VPN service and use it.',
  },
  {
    label: 'Is Amnezia a free service?',
    content:
      'Yes, Amnezia is absolutely free software.\n' +
      'However, you need to purchase any VPS from any provider to create your own VPN.',
  },
  {
    label: 'Which devices and operating systems does Amnezia support?',
    content: 'Currently, there are versions available for Windows, macOS, Android, iOS, and Linux.',
  },
  {
    label: 'Does Amnezia collect user data?',
    content: (
      <>
        Amnezia does not collect or share any statistics, logs, analytics, or any other user
        information. The only data requested by the client is connection data, which is also not
        collected or transmitted, which can be verified thanks to the
        <TextLink
          to="https://github.com/amnezia-vpn"
          variant="light"
          text=" open-source "
          openInNewTab
        />
        nature of the server and client side of the software.
      </>
    ),
  },
  {
    label: 'How does Amnezia work?',
    content:
      'You specify the IP address, login and password of your server.\n' +
      'The application connects to the server via SSH, installs Docker and runs Amnezia server containers.  A separate container is started for each connection protocol and keys are generated. Once the server is configured, you can connect via VPN to that server.',
  },
  {
    label: 'Why Amnezia is more resistant to blocking than other VPNs?',
    content:
      'The larger and more popular a commercial VPN service is, the more likely it is to come under the scrutiny of regulatory authorities, and therefore the higher the probability of blocking access to its servers and protocols. With Amnezia you create your own VPN for your use only on the basis of any VPS. When you use your own VPS in conjunction with encrypted VPN protocols, the probability of blocking is significantly reduced. Our users from countries with high blocking rates can attest to this.',
  },
  {
    label: 'Advantages of Amnezia VPN over other VPNs',
    content: (
      <>
        <p>
          <strong>Full Control</strong> - you have full control over your own VPN server, including
          configuration, security, logging and data access. You can choose the configuration,
          encryption protocols and security settings according to your requirements. For more
          details, see how Amnezia works.
        </p>
        <p>
          <strong>Mobility</strong> - ability to use your configured VPN not only with Amnezia
          client, but also with other native OpenVPN, OpenVPN connect or Wireguard applications.
        </p>
        <p>
          <strong>Resistant to IP blocking</strong> - many websites and government regulators know
          the IP addresses of popular VPN servers and blacklist them. Buying a separate VPS, your IP
          address is used only by you and the people with whom you shared your connection data, so
          only you know that this address is used for the VPN
        </p>
        <p>
          <strong>Resistance to VPN protocol blocking</strong> - Amnezia supports the Open VPN
          protocol with cloak, which can be installed when you first connect to the server. More
          details about the cloak plugin.
        </p>
        <p>
          <strong>Ability to share with other users</strong> - Amnezia supports the ability to share
          your connection with an unlimited number of users. Just buy any VPS server, connect to it
          with Amnezia, create a configuration for connection and share it with everyone you trust.
        </p>
        <p>
          <strong>Open Source</strong> - Amnezia, unlike most other VPNs, is open source, both
          server and client side. Amnezia does not collect, store or share user data. Any user can
          verify this by looking at the code on github.
        </p>
        <p>
          <strong>Multiple protocol support</strong> - on a single VPN client you can use a variety
          of protocols from the most secure and safe, such as AmneziaWG and OpenVPN with Cloak
          plugin, to the simplest and fastest, such as Wireguard and IKv2. Learn more about the
          protocols and how to install them.
        </p>
      </>
    ),
  },
];

export default faqDataRu;
