import TextLink from '@src/shared/ui/TextLink/TextLink';

const faqDataRu = [
  {
    label: "I downloaded the app, what's next?",
    content: (
      <>
        Once you have downloaded the app, you need to enter your VPS details. You can use your
        existing VPS or buy a new one. As an example,
        <TextLink to="../instructions/0_starter-guide" variant="light" text=" here " openInNewTab />
        are the instructions for buying a VPS on several popular hostings.
      </>
    ),
  },
  {
    label: 'I want to buy a VPS, what options should I choose?',
    content:
      'Amnezia works with any KVM virtualization servers running Ubuntu (officially supported version is 20.04) and Debian 10.',
  },
  {
    label: 'Why do I need a server with KVM?',
    content:
      'Amnezia uses Docker to stand-alone your VPN server deployment. Not every type of virtualization can be used with Docker, but KVM definitely allows it. Other types of virtualization may not work with Docker, either due to the limitations of the specific virtualization type or due to configuration from the VPS vendor.',
  },
  {
    label: 'Which VPN protocol to choose?',
    content: (
      <>
        <p>
          <strong>IMPORTANT!</strong> If your country has a very high level of control and blocked
          access to many sites, do not work any commercial and free VPN and VPN protocols, we
          recommend using OpenVPN over Cloak from the first connection. If you use unmasked
          protocols, the ip of your VPS can be blocked.
        </p>
        <p>
          Unmasked protocols OpenVPN over UDP, WireGuard and IKEv2 over UDP are easily detected by
          firewalls and some websites. Sites may show a warning: "disable VPN before visiting site".
        </p>
        <p>
          To avoid this issue, use OpenVPN with the TCP protocol, OpenVPN over ShadowSocks, or
          OpenVPN over Cloak.
        </p>
        <p>In all other cases, the difference between the protocols is minimal.</p>
      </>
    ),
  },
  // {
  //   label: 'What is Kill Switch?',
  //   content: (
  //     <>
  //       <strong>Kill switch!</strong> — is an emergency internet disconnect feature integrated into
  //       the VPN app. In case of an unexpected disconnection of your VPN-connection, the
  //       <strong> kill switch </strong>feature will automatically disconnect you from the Internet.
  //     </>
  //   ),
  // },
  {
    label: 'I want to use a VPN, but not for all sites. What are the options?',
    content:
      'Amnezia has a feature that allows you to add site exclusions to the list, enabling you to visit them from your IP address. This feature is available on the main screen of the client when it is connected.',
  },
  {
    label: 'Can I use key authentication for Amnezia?',
    content:
      'It is possible, authorization is supported both by password and by keys. Supported OpenSSH key types: RSA (2048, 3072, 4096) and ECDSA (nistp256)',
  },
  {
    label: 'Can I share my connection with other people?',
    content:
      'Yes, you can share connection data with anyone you trust. Use one VPS for an unlimited number of users.',
  },
  {
    label: 'Purpose of the "Clear client cached profile" feature.',
    content:
      'By default, Amnezia caches data (certificates and keys) from the configured VPN server by default to enable quick connections. The reset button generates new certificates with keys and places them on the server via an SSH connection before establishing a connection. Use this option when changing the server (if installed on multiple VPS), updating the client or server, or when changing container settings.',
  },
  {
    label: 'Amnezia throws an error. What to do?',
    content: (
      <>
        <p>
          Contact the developers by
          <TextLink
            text=" support@amnezia.org"
            to="mailto:support@amnezia.org"
            variant="light"
          />{' '}
          or in the <TextLink text="Telegram" to="https://t.me/amnezia_vpn_en" variant="light" />{' '}
          chat and provide the logs of the program.
        </p>
        <p>You can get the logs in the following ways:</p>
        <strong>On Windows:</strong>
        <ul>
          <li>C:\Users\%USERNAME%\AppData\Roaming\AmneziaVPN.ORG\AmneziaVPN\log</li>
          <li>C:\ProgramData\AmneziaVPN\log</li>
        </ul>
        <br />
        <strong>On MacOS:</strong>
        <ul>
          <li>/$HOME/Library/Application\ Support/AmneziaVPN.ORG/AmneziaVPN/</li>
          <li>/var/log/AmneziaVPN/AmneziaVPN-service.log</li>
        </ul>
      </>
    ),
  },
  {
    label: 'Can I use my new VPN on other apps?',
    content:
      'Yes. If you have connected at least once through Amnezia, then Amnezia has configured a VPN for you and you can connect to your VPN through other applications.',
  },
  {
    label: "Why can't you use VPS from public sources?",
    content:
      'Connection data may be vulnerable to interception, potentially compromising your traffic and personal data. For a secure connection, use a VPS purchased from a trusted provider or data shared with you by a trusted source',
  },
  {
    label: "OpenVPN over Cloak don't work",
    content:
      'OpenVPN over Cloak installed on Amnezia 2.0.2 version is not compatible with client versions 3.0.0 and above. To ensure proper functionality, it is necessary to reinstall the protocol.',
  },
];

export default faqDataRu;
